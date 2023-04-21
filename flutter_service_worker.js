'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "503e5fe25e4bcc00d590ca2bb2ca4008",
"assets/assets/fonts/Custom_icon_cms.ttf": "e4a0acd6f1be7f978dd451e4c8d91732",
"assets/assets/fonts/sarabun/Sarabun-Bold.ttf": "60bddd6bb0c18a6e70fe1276c0d86c81",
"assets/assets/fonts/sarabun/Sarabun-Regular.ttf": "49d082d0164cdf471f5e00b1fddb89f9",
"assets/assets/fonts/sarabun/Sarabun-SemiBold.ttf": "b8efe5f4835e6d7ebfedfe50be6a4291",
"assets/assets/icons/123.png": "d1e4d4599d29c80b99aa7c908a7a7405",
"assets/assets/icons/avt.svg": "8f5cd9795754260f24c00b56200188e2",
"assets/assets/icons/bkg.png": "d1e4d4599d29c80b99aa7c908a7a7405",
"assets/assets/icons/calendar.svg": "1469c28b5aaefa81c67f41a690c1fb01",
"assets/assets/icons/chat.svg": "6147989a378d194412a8ab46b074b828",
"assets/assets/icons/close.svg": "514fd93b81111d5f4922c166535106b4",
"assets/assets/icons/delete.svg": "43cdc423ec0fd7ff176ec711c435fd22",
"assets/assets/icons/document.svg": "49dfc84e8a82dccf4c985ffac065f1d1",
"assets/assets/icons/drop.svg": "ac66e2bca3359c8d745c74c10a90f377",
"assets/assets/icons/edit.svg": "7d4b2fc131368b8a3580cedf56e87be3",
"assets/assets/icons/eye.svg": "91325b498f7d881bdd070a2d21aaac87",
"assets/assets/icons/forward.svg": "fcd18b75cd5cd77108d4619f496d65ce",
"assets/assets/icons/google-plus.svg": "3f71987b1e86c1f980e19a685acd040c",
"assets/assets/icons/ichome.svg": "4226e426d2e640ac43bf3d9850ec588f",
"assets/assets/icons/icon_kd.svg": "095bbd966b066e7e7058ba83ea415fa1",
"assets/assets/icons/icon_user.svg": "c9a8b81603c76f17fd06d736064d7606",
"assets/assets/icons/ic_close.svg": "0447f0e16fd5b35dc947d39d90fab08d",
"assets/assets/icons/ic_permission.svg": "3bc6d7e880cb8a09c3b928b829705bdc",
"assets/assets/icons/list.svg": "183586ecb5eae828a94e1839b710eb46",
"assets/assets/icons/login.svg": "29789505ffbeb46eb1b684cd50dab810",
"assets/assets/icons/login_bkg.svg": "c1cbebb9e2c50e422c857f4e0ea1a763",
"assets/assets/icons/logo_dashboard.png": "5117d3c455252792db533a177ad1d7cd",
"assets/assets/icons/pass.svg": "2b65e2fd58d06530804b5c0990d842d4",
"assets/assets/icons/view.svg": "91325b498f7d881bdd070a2d21aaac87",
"assets/assets/images/btn_delete.png": "4993445817cd6a8205eeb8275c66c59a",
"assets/assets/images/btn_edit.png": "9d8adf9daec873b208f2f9e976dfe307",
"assets/assets/images/btn_info.png": "08d9913fe8b0d40c300880e164cf9181",
"assets/assets/images/btn_view.png": "1774239d397a36920bd101a3fdc93854",
"assets/assets/images/cloud.svg": "b60eeae59a80fef924e6a14258f0b933",
"assets/assets/images/error.svg": "2d4083ed807fe47033d38aa869d81b65",
"assets/assets/images/icon_dot_loadfile.svg": "1b59dedda4d35811f08e24d92b0af66f",
"assets/assets/images/icon_remove_file.svg": "4f9ce84ccd543db1dcf44994a989a4f5",
"assets/assets/images/login_bottom.png": "b473d9b1b30607e274348f114273a094",
"assets/assets/images/main_bottom.png": "322c8b4cda43fe21e0d78a1f30f387ce",
"assets/assets/images/main_top.png": "cd3220e276bb9dee0a1c7d18126aad72",
"assets/assets/images/signup_top.png": "6eaad7a7b0febd05500366722015bd6d",
"assets/assets/images/success.svg": "a77eb4a1f3217ff913ac0700d78cfac0",
"assets/assets/images/warning.svg": "e9ab7d4cb0b5818d6d96e3f231d45c40",
"assets/assets/json/recruitement_news.json": "fe362b9c278978de13a19749f21aab26",
"assets/assets/json/recruitement_news_other.json": "37c7188d00b48e1407f399f98bc0c920",
"assets/FontManifest.json": "18a0de60aaf6d12b8667b151945be136",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "96362477567a8b872729bcfff79eac8b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e79ff1d9818358560c26a1ce88771469",
"/": "e79ff1d9818358560c26a1ce88771469",
"loader.css": "bbb9ca3416aea614ef7b83b8093d5e8e",
"main.dart.js": "40718d044cefac493c4af13a43cc4879",
"manifest.json": "0fbfa3a58a82479a9db1d332b9b5fa6c",
"version.json": "49bdd9afd23988815847a339b7fa5284"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
