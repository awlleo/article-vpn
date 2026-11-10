
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.CLkl9rCq.js","cdn/shopifycloud/checkout-web/assets/c1/app-legacy.zJHUnwhm.js","cdn/shopifycloud/checkout-web/assets/c1/630ba094-legacy.UuivW9Jb.js","cdn/shopifycloud/checkout-web/assets/c1/4509beb0-legacy.DA17V2nz.js","cdn/shopifycloud/checkout-web/assets/c1/6a2fc6d6-legacy.CS2JsZ02.js","cdn/shopifycloud/checkout-web/assets/c1/f025431a-legacy.CuSCqDke.js","cdn/shopifycloud/checkout-web/assets/c1/6ec9a0fa-legacy.BjCjheH6.js","cdn/shopifycloud/checkout-web/assets/c1/164ad2e3-legacy.BFPGJ46J.js","cdn/shopifycloud/checkout-web/assets/c1/fb3b4968-legacy.DesOnDiK.js","cdn/shopifycloud/checkout-web/assets/c1/7d6bf786-legacy.BC7Vzu1a.js","cdn/shopifycloud/checkout-web/assets/c1/0f5b1987-legacy.bTrsIL_b.js","cdn/shopifycloud/checkout-web/assets/c1/9e5d8eb8-legacy.CpBXmpw2.js","cdn/shopifycloud/checkout-web/assets/c1/a45fed45-legacy.adMrrTnJ.js","cdn/shopifycloud/checkout-web/assets/c1/c328865d-legacy.CtXmbUXr.js","cdn/shopifycloud/checkout-web/assets/c1/f1384cc2-legacy._MEX-4t1.js","cdn/shopifycloud/checkout-web/assets/c1/4618373b-legacy.Cnq_BvfQ.js","cdn/shopifycloud/checkout-web/assets/c1/486c3fda-legacy.CHL2w4zP.js","cdn/shopifycloud/checkout-web/assets/c1/17f6d6d8-legacy.11pMKbzp.js","cdn/shopifycloud/checkout-web/assets/c1/19286c78-legacy.CMXiwjq0.js","cdn/shopifycloud/checkout-web/assets/c1/c7b92b97-legacy.DZPfnrZ0.js","cdn/shopifycloud/checkout-web/assets/c1/faece749-legacy.Du4q0DtC.js","cdn/shopifycloud/checkout-web/assets/c1/77d9e668-legacy.C_UP-O7w.js","cdn/shopifycloud/checkout-web/assets/c1/2c7267bc-legacy.DcfesKR_.js","cdn/shopifycloud/checkout-web/assets/c1/4661cd61-legacy.CUW4L9I6.js","cdn/shopifycloud/checkout-web/assets/c1/928dbd30-legacy.Cp5ErAFD.js","cdn/shopifycloud/checkout-web/assets/c1/77821758-legacy.CyJFt8Xa.js","cdn/shopifycloud/checkout-web/assets/c1/82d59f8f-legacy.DcAqSwPk.js","cdn/shopifycloud/checkout-web/assets/c1/08e2c58d-legacy.uRZVPZMN.js","cdn/shopifycloud/checkout-web/assets/c1/a8202753-legacy.B8w6ByO9.js","cdn/shopifycloud/checkout-web/assets/c1/dfb65aab-legacy.BLvfl4oF.js","cdn/shopifycloud/checkout-web/assets/c1/e1177f6f-legacy.BD-4JSIm.js","cdn/shopifycloud/checkout-web/assets/c1/2f5db8a5-legacy.w4YeCtZd.js","cdn/shopifycloud/checkout-web/assets/c1/c0466e46-legacy.BFpPa2Pz.js","cdn/shopifycloud/checkout-web/assets/c1/8d7e1337-legacy.Db-m8UkO.js","cdn/shopifycloud/checkout-web/assets/c1/5bf177e7-legacy.DyV9_vyX.js","cdn/shopifycloud/checkout-web/assets/c1/f3089cd3-legacy.BTpa2cn_.js","cdn/shopifycloud/checkout-web/assets/c1/8da28279-legacy.BhTJL8_3.js","cdn/shopifycloud/checkout-web/assets/c1/a541bc81-legacy.BFN_uyUx.js","cdn/shopifycloud/checkout-web/assets/c1/6b0dea54-legacy.BSYVuQU3.js","cdn/shopifycloud/checkout-web/assets/c1/9c33421f-legacy.DbpJO2ze.js","cdn/shopifycloud/checkout-web/assets/c1/37c3ef79-legacy.D52AN1At.js","cdn/shopifycloud/checkout-web/assets/c1/651bb548-legacy.CRYlbc2O.js","cdn/shopifycloud/checkout-web/assets/c1/83f74304-legacy.DsYkrJWu.js","cdn/shopifycloud/checkout-web/assets/c1/7edfee1d-legacy.fu0yqfpv.js","cdn/shopifycloud/checkout-web/assets/c1/ce604576-legacy.Df9Y92uL.js","cdn/shopifycloud/checkout-web/assets/c1/b01c110b-legacy.DDveCrt4.js","cdn/shopifycloud/checkout-web/assets/c1/4e32eceb-legacy.CrHEUX54.js","cdn/shopifycloud/checkout-web/assets/c1/f00fed33-legacy.CvTs8UV2.js","cdn/shopifycloud/checkout-web/assets/c1/94493b3a-legacy.Bltvx8Di.js","cdn/shopifycloud/checkout-web/assets/c1/99cd9b25-legacy.hGm0kTTV.js","cdn/shopifycloud/checkout-web/assets/c1/676eb8e9-legacy.BFOS14ZO.js","cdn/shopifycloud/checkout-web/assets/c1/a9ee22a0-legacy.Detebx_i.js","cdn/shopifycloud/checkout-web/assets/c1/56132226-legacy.R_-K6-0Z.js","cdn/shopifycloud/checkout-web/assets/c1/0e3247a0-legacy.gTlh5Ezh.js","cdn/shopifycloud/checkout-web/assets/c1/1dbf806c-legacy.BUKR2yzn.js","cdn/shopifycloud/checkout-web/assets/c1/a56386a6-legacy.CSoKg8Oa.js","cdn/shopifycloud/checkout-web/assets/c1/674595ba-legacy.Q-_j2iYv.js","cdn/shopifycloud/checkout-web/assets/c1/173d1fdf-legacy.C6kJfoGx.js","cdn/shopifycloud/checkout-web/assets/c1/0d85278a-legacy.DPn59MAd.js","cdn/shopifycloud/checkout-web/assets/c1/16138b9e-legacy.nbKDcb-Z.js","cdn/shopifycloud/checkout-web/assets/c1/55432860-legacy._vMluRgW.js","cdn/shopifycloud/checkout-web/assets/c1/0be192b6-legacy.BK-1bMuq.js","cdn/shopifycloud/checkout-web/assets/c1/2bce9289-legacy.CINE8BNz.js","cdn/shopifycloud/checkout-web/assets/c1/62a11d3e-legacy.DuWCnyvq.js","cdn/shopifycloud/checkout-web/assets/c1/9a493f3d-legacy.DGbmGv9D.js","cdn/shopifycloud/checkout-web/assets/c1/402b40d8-legacy.CvfKl2Ni.js","cdn/shopifycloud/checkout-web/assets/c1/17db3e71-legacy.Chp5frMV.js","cdn/shopifycloud/checkout-web/assets/c1/b4f06cd6-legacy.DNXiRqT_.js","cdn/shopifycloud/checkout-web/assets/c1/2b0d1656-legacy.D70_pg-_.js","cdn/shopifycloud/checkout-web/assets/c1/64c3067d-legacy.BWgsmfli.js","cdn/shopifycloud/checkout-web/assets/c1/bbe16958-legacy.CsKil_jA.js","cdn/shopifycloud/checkout-web/assets/c1/6a8181a5-legacy.ChKBL0rR.js","cdn/shopifycloud/checkout-web/assets/c1/4205169c-legacy.AlAIIaVl.js","cdn/shopifycloud/checkout-web/assets/c1/1befea5c-legacy.G8GD9Z40.js","cdn/shopifycloud/checkout-web/assets/c1/ff52cf6d-legacy.hQgw5_c2.js","cdn/shopifycloud/checkout-web/assets/c1/74e5a557-legacy.C0U92l_C.js","cdn/shopifycloud/checkout-web/assets/c1/f4d0afee-legacy.hiWY5dnT.js","cdn/shopifycloud/checkout-web/assets/c1/0b704646-legacy.DiwMWFCL.js","cdn/shopifycloud/checkout-web/assets/c1/a7ef2c81-legacy.C_ViuRz_.js","cdn/shopifycloud/checkout-web/assets/c1/f0b3b291-legacy.DyJf0GUd.js","cdn/shopifycloud/checkout-web/assets/c1/114cc9d1-legacy.7y_RUBa9.js","cdn/shopifycloud/checkout-web/assets/c1/e7ae9e74-legacy.B1kYA6-F.js","cdn/shopifycloud/checkout-web/assets/c1/91e796b6-legacy.CexsYOz4.js","cdn/shopifycloud/checkout-web/assets/c1/a222330e-legacy.DpxX60jH.js","cdn/shopifycloud/checkout-web/assets/c1/c380a132-legacy.BL4cfWw0.js","cdn/shopifycloud/checkout-web/assets/c1/3839d836-legacy.DrnbSvhD.js","cdn/shopifycloud/checkout-web/assets/c1/72fde58e-legacy.C4kZD6BQ.js","cdn/shopifycloud/checkout-web/assets/c1/8cad6ded-legacy.GardkN1y.js","cdn/shopifycloud/checkout-web/assets/c1/9e556116-legacy.Btjn_Vco.js","cdn/shopifycloud/checkout-web/assets/c1/abf134e3-legacy.DweayIeZ.js","cdn/shopifycloud/checkout-web/assets/c1/e6a05f36-legacy.BoCmceyF.js","cdn/shopifycloud/checkout-web/assets/c1/8e6bd8e5-legacy.BQIAMhQ9.js","cdn/shopifycloud/checkout-web/assets/c1/a012ee00-legacy.__3MCZ6T.js","cdn/shopifycloud/checkout-web/assets/c1/71b36506-legacy.OBDx7qBQ.js","cdn/shopifycloud/checkout-web/assets/c1/7aefefff-legacy.BClWUUKr.js","cdn/shopifycloud/checkout-web/assets/c1/e72406f8-legacy.CVb4uD_2.js","cdn/shopifycloud/checkout-web/assets/c1/bdb60128-legacy.4L2VCQbO.js","cdn/shopifycloud/checkout-web/assets/c1/a0df1226-legacy.BkSuWK7g.js","cdn/shopifycloud/checkout-web/assets/c1/8efef14b-legacy.DyAcOafz.js","cdn/shopifycloud/checkout-web/assets/c1/c1adaf81-legacy.DEkqN6v2.js","cdn/shopifycloud/checkout-web/assets/c1/21162507-legacy.CokU_qaN.js","cdn/shopifycloud/checkout-web/assets/c1/139f607b-legacy.mtZ5dgMP.js","cdn/shopifycloud/checkout-web/assets/c1/5f1fce8b-legacy.n6ftDVDO.js","cdn/shopifycloud/checkout-web/assets/c1/bace9a08-legacy.BKBDgvcU.js","cdn/shopifycloud/checkout-web/assets/c1/8e2be3f2-legacy.C35KgoZa.js","cdn/shopifycloud/checkout-web/assets/c1/2d034bf2-legacy.ChA26dXN.js","cdn/shopifycloud/checkout-web/assets/c1/972590c9-legacy.DQX6Jka9.js","cdn/shopifycloud/checkout-web/assets/c1/9961965b-legacy.YxXmMWDN.js","cdn/shopifycloud/checkout-web/assets/c1/bc751930-legacy.0iZWJLyL.js","cdn/shopifycloud/checkout-web/assets/c1/842452fd-legacy.BruWBzGX.js","cdn/shopifycloud/checkout-web/assets/c1/a70a5b74-legacy.YjAPhB_K.js","cdn/shopifycloud/checkout-web/assets/c1/b068efe0-legacy.DfvVD8CU.js","cdn/shopifycloud/checkout-web/assets/c1/2692118b-legacy.fAZNw29o.js","cdn/shopifycloud/checkout-web/assets/c1/c4303b96-legacy.CWUHnwwM.js","cdn/shopifycloud/checkout-web/assets/c1/7ee3a05c-legacy.BY9rN0os.js","cdn/shopifycloud/checkout-web/assets/c1/0d8691fc-legacy.DLZ4WFOV.js","cdn/shopifycloud/checkout-web/assets/c1/b0923a20-legacy.Cx37zMb_.js","cdn/shopifycloud/checkout-web/assets/c1/7e9c6d7c-legacy.C4w-Cn0m.js","cdn/shopifycloud/checkout-web/assets/c1/ea392d18-legacy.DSgGVKkC.js","cdn/shopifycloud/checkout-web/assets/c1/b2ef26e8-legacy.DhcPu8eQ.js","cdn/shopifycloud/checkout-web/assets/c1/99bfe9cf-legacy.CFKiW2if.js","cdn/shopifycloud/checkout-web/assets/c1/1493337c-legacy.UntJPFp2.js","cdn/shopifycloud/checkout-web/assets/c1/3c46c6f5-legacy.D_AH5-jF.js","cdn/shopifycloud/checkout-web/assets/c1/e29daa9a-legacy.CewL3ITh.js","cdn/shopifycloud/checkout-web/assets/c1/b2371320-legacy.l6P51Fk7.js","cdn/shopifycloud/checkout-web/assets/c1/a735741f-legacy.CPJDHmPz.js","cdn/shopifycloud/checkout-web/assets/c1/5a1effbb-legacy.BVP6rSh2.js","cdn/shopifycloud/checkout-web/assets/c1/67e8c664-legacy.BdGHUQ7T.js","cdn/shopifycloud/checkout-web/assets/c1/4bb32466-legacy.DoCdd-Tw.js","cdn/shopifycloud/checkout-web/assets/c1/ed37d3c3-legacy.DPPvJULS.js","cdn/shopifycloud/checkout-web/assets/c1/30df5a02-legacy.BTyvS6Vt.js","cdn/shopifycloud/checkout-web/assets/c1/e32a8416-legacy.XaKcnyv2.js","cdn/shopifycloud/checkout-web/assets/c1/eb0f242a-legacy.2uGMxEQD.js","cdn/shopifycloud/checkout-web/assets/c1/109c16d9-legacy.lkt0EwCk.js","cdn/shopifycloud/checkout-web/assets/c1/35fb5eb6-legacy.BRkq72ZZ.js","cdn/shopifycloud/checkout-web/assets/c1/05f561d4-legacy.bzDwma9c.js","/cdn/shopifycloud/checkout-web/assets/c1/69f8f26d-legacy.DDXm85mJ.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  