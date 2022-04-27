const path = require("path")

const withImages = require("next-images")
module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif", "svg"],
  disableStaticImages: true,
  webpack: (config) => {
    config.resolve.modules.push(path.resolve("./src"))
    config.module.rules.push(
      ...[
        {
          test: /\.(eot|otf|ttf|woff|woff2)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 1000000,
            },
          },
        },
      ]
    )

    return config
  },
})
