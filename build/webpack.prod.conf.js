var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var PrerenderSpaPlugin = require('prerender-spa-plugin')

var env = config.build.env

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    new PrerenderSpaPlugin(
      // Path to compiled app
      path.join(__dirname, '../dist'),
      // List of endpoints you wish to prerender
      [
        '/blog',
        '/blog/contributors',
        '/blog/all-about-science',
        '/blog/all-about-science/why-natural-form-fish-oils-are-better-for-your-body-and-your-wallet',
        '/blog/all-about-science/vitamins-d3-k2-a-dynamic-bone-building-plaque-fighting-duo',
        '/blog/all-about-science/fermented-foods-and-probiotics-your-ticket-to-a-healthy-microbiome',
        '/blog/all-about-science/eclipse-inspired-tips-for-lifelong-healthy-vision',
        '/blog/all-about-science/skin-health-from-the-inside-out',
        '/blog/all-about-science/omega-3-dha-and-vitamin-d-why-theyre-so-important-during-pregnancy',
        '/blog/all-about-science/omega-3s-and-curcumin-contributors-to-a-healthy-immune-response',
        '/blog/all-about-science/why-your-best-friend-needs-omega-3s-too',
        '/blog/all-about-science/why-fish-oil-is-a-better-source-of-omega-3s-than-krill-oil',
        '/blog/all-about-science/coq10-and-omega-3s-a-heart-health-powerhouse',
        '/blog/all-about-science/five-myths-and-facts-about-vitamin-d',
        '/blog/big-picture',
        '/blog/big-picture/refuse-reduce-reuse-10-things-to-clean-up-our-oceans',
        '/blog/big-picture/dear-cosmo-why-you-really-should-take-your-fish-oil',
        '/blog/big-picture/ocean-health-lessons-in-personal-impact',
        '/blog/big-picture/why-business-transparency-should-be-the-first-item-on-your-shopping-list',
        '/blog/big-picture/fighting-hunger-in-america-a-year-round-battle',
        '/blog/big-picture/mentor-a-young-person-and-change-someones-life-for-the-better',
        '/blog/big-picture/why-shop-friend-of-the-sea-fos-certified',
        '/blog/the-nordic-way',
        '/blog/the-nordic-way/inside-nordic-naturals-meet-jonna-customer-service-rep-extraordinaire',
        '/blog/the-nordic-way/inside-nordic-naturals-meet-derek-international-music-maker',
        '/blog/the-nordic-way/midnight-sun-and-white-nights-what-summer-in-arctic-norway-can-teach-us-about-sleep',
        '/blog/the-nordic-way/seven-ways-we-put-sustainability-into-action',
        '/blog/the-nordic-way/inside-nordic-naturals-meet-kerry-pro-sports-line-mvp',
        '/blog/the-nordic-way/giving-children-more-of-what-they-need-to-stay-healthy-introducing-five-new-products-for-kids-and-teens',
        '/blog/the-nordic-way/surviving-life-s-setbacks-and-coming-back-strong',
        '/blog/the-nordic-way/inside-nordic-naturals-meet-jamie-retail-trade-show-ringleader',
        '/blog/the-nordic-way/do-you-really-need-omega-3s',
        '/blog/the-nordic-way/inside-nordic-naturals-meet-oscar-virtual-bouncer-and-all-around-fix-it-guy',
        '/blog/home-life',
        '/blog/home-life/getting-little-ones-to-eat-well-8-great-tips',
        '/blog/home-life/omega-3s-why-theyre-especially-important-for-mens-health',
        '/blog/home-life/how-to-marie-kondo-your-medicine-cabinet',
        '/blog/home-life/time-to-get-a-move-on-joint-health',
        '/blog/home-life/reading-writing-and-omega-3s',
        '/blog/home-life/why-your-body-doesnt-want-you-to-sit-all-day',
        '/blog/home-life/five-healthy-essentials-to-pack-for-your-holiday-travels',
        '/blog/home-life/five-ways-to-keep-your-spirits-bright-after-the-holidays-end',
        '/blog/home-life/creating-healthy-habits-that-stick',
        '/blog/home-life/how-relationships-affect-your-health',
        '/blog/home-life/how-to-read-a-supplement-label'
      ],
      {
        ignoreJSErrors: true
      }
    ),
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css')
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
