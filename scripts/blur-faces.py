import sys, json
import cv2, numpy as np

src, out, debug = sys.argv[1], sys.argv[2], sys.argv[3]
manual = json.loads(sys.argv[4]) if len(sys.argv) > 4 else []   # [x,y,w,h] in 2000px-wide coords
img = cv2.imread(src)
H, W = img.shape[:2]
s = 2000 / W
small = cv2.resize(img, (2000, int(H * s)))
gray = cv2.equalizeHist(cv2.cvtColor(small, cv2.COLOR_BGR2GRAY))
d = cv2.data.haarcascades
boxes = []
def run(name, flip=False, scale=1.05, nb=3, minsz=40):
    c = cv2.CascadeClassifier(d + name)
    g = cv2.flip(gray, 1) if flip else gray
    for (x, y, w, h) in c.detectMultiScale(g, scaleFactor=scale, minNeighbors=nb, minSize=(minsz, minsz)):
        if flip: x = 2000 - x - w
        boxes.append([x, y, w, h])
boxes += manual
# merge overlapping
merged = []
for b in sorted(boxes, key=lambda b: -b[2] * b[3]):
    x, y, w, h = b
    if not any(x < m[0] + m[2] and m[0] < x + w and y < m[1] + m[3] and m[1] < y + h for m in merged):
        merged.append(b)
mask = np.zeros(small.shape[:2], np.uint8)
dbg = small.copy()
for x, y, w, h in merged:
    cx, cy = int(x + w / 2), int(y + h / 2)
    cv2.ellipse(mask, (cx, cy), (int(w * 0.6), int(h * 0.62)), 0, 0, 360, 255, -1)
    cv2.rectangle(dbg, (x, y), (x + w, y + h), (0, 0, 255), 3)
cv2.imwrite(debug, dbg)
k = 0.06  # blur strength relative to width
big_mask = cv2.resize(mask, (W, H))
big_mask = cv2.GaussianBlur(big_mask, (0, 0), 6)
ksz = int(W * k) | 1
blurred = cv2.GaussianBlur(img, (0, 0), W * 0.012)
blurred = cv2.GaussianBlur(blurred, (0, 0), W * 0.008)
a = (big_mask.astype(np.float32) / 255)[..., None]
res = (img * (1 - a) + blurred * a).astype(np.uint8)
cv2.imwrite(out, res, [cv2.IMWRITE_JPEG_QUALITY, 92])
print(len(merged), 'regions')
