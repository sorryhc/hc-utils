import React from "react";import * as LayoutAll from "@/layout";const { default: LayoutDefault,...LayoutOther } = LayoutAll;const router = [
    {
        "path": "/",
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
        ],
        ...LayoutOther
    }
];
export default router;
