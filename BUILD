load("@aspect_rules_js//js:defs.bzl", "js_library")
load("@npm//:defs.bzl", "npm_link_all_packages")

npm_link_all_packages(name = "node_modules")

js_library(
    name = "package_json",
    srcs = ["package.json"],
    visibility = ["//react:__subpackages__"],
)

