const router = [
  {
    "path": "/",
    "element": "@/layout",
    "children": [
      {
        "index": true,
        "element": "@/pages/index"
      },
      {
        "path": "/home",
        "index": true,
        "element": "@/pages/index"
      },
      {
        "path": "uri",
        "element": "@/pages/uri"
      },
      {
        "path": "validate",
        "element": "@/pages/validate"
      }
    ]
  }
]

export default router;