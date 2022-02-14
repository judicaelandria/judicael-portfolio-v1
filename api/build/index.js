var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// empty-module:./Navbar.client
var require_Navbar = __commonJS({
  "empty-module:./Navbar.client"(exports, module2) {
    init_react();
    module2.exports = {};
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/home/judi/Documents/code/judicael-portfolio/app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix3 = __toModule(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-N3HNJ2KQ.css";

// app/constants.ts
init_react();
var GITHUB_URL = "https://github.com/judicaelandria";
var DOMAINS = "https://judicael.vercel.app";
var TITLE = "Judica\xEBl A. -- Designer, developer";
var DESCRIPTION = "Welcome to my digital garden, this is the place where I share some of  side projects. I love building and experimenting things to learn more about the web and mobile. I think this is the most effective way of learning. Dreamin up and building a project that I wish existed is my  passion or project that exist but I can do something to make it more awesome.";
var TWITTER_DESCRIPTION = "Welcome to my digital garden, this is the place where I share some of  side projects. I love building and experimenting things to learn more about the web and mobile. I think this is the best way to learn for me.";
var SOCIAL_IMAGE_URL = "https://res.cloudinary.com/judicael/image/upload/v1642504274/personnal-website/social_cdg7ea.png";

// app/styles/global.css
var global_default = "/build/_assets/global-PSH6IK7G.css";

// app/components/ErrorBoundary/ErrorBoundary.tsx
init_react();
var import_remix2 = __toModule(require_remix());
var ErrorBoundaryPage = () => {
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Oh no!"), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("section", {
    className: "w-full min-h-screen bg-bgColor flex flex-col justify-center items-center gap-3"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-2xl text-white font-medium"
  }, "Oh no :(, sorry about that!"), /* @__PURE__ */ React.createElement("h4", {
    className: "text-base text-white/80"
  }, "We're actually facing an error, reload the page please")), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null)));
};
var ErrorBoundary_default = ErrorBoundaryPage;

// route-module:/home/judi/Documents/code/judicael-portfolio/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: tailwind_default },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
    },
    {
      rel: "stylesheet",
      href: global_default
    }
  ];
};
var meta = () => {
  return {
    "og:locale": "en",
    "og:site_name": "Judica\xEBl",
    "og:type": "website",
    "og:description": DESCRIPTION,
    "og:url": DOMAINS,
    "og:title": TITLE,
    "og:image": SOCIAL_IMAGE_URL,
    "twitter:card": "summary_large_image",
    "twitter:creator": "@judicael_andria",
    "twitter:site": "@judicael_andria",
    "twitter:description": TWITTER_DESCRIPTION,
    "twitter:image": SOCIAL_IMAGE_URL,
    "twitter:title": TITLE,
    "X-UA-Compatible": "IE=edge,chrome=1",
    author: "Judica\xEBl",
    HandheldFriendly: "True",
    language: "en",
    pagename: "Judica\xEBl",
    robots: "index, follow",
    title: TITLE,
    description: DESCRIPTION,
    viewport: "width=device-width, initial-scale=1, viewport-fit=cover"
  };
};
function ErrorBoundary() {
  return /* @__PURE__ */ React.createElement(ErrorBoundary_default, null);
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/favicon.png"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}

// route-module:/home/judi/Documents/code/judicael-portfolio/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader
});
init_react();
var import_react2 = __toModule(require("react"));
var import_remix4 = __toModule(require_remix());

// app/components/index.ts
init_react();
var import_Navbar = __toModule(require_Navbar());

// app/components/Hero.tsx
init_react();

// app/components/ExternalLink.tsx
init_react();
var ExternalLink = ({ label, url }) => {
  return /* @__PURE__ */ React.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noopener",
    className: "font-poppins"
  }, label);
};
var ExternalLink_default = ExternalLink;

// app/components/Hero.tsx
var Hero = () => {
  return /* @__PURE__ */ React.createElement("section", {
    className: "w-full mt-28 flex flex-col gap-4 justify-center items-center"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-5xl text-white font-poppins font-semibold leading-relaxed text-center"
  }, "Howdy, I'm ", /* @__PURE__ */ React.createElement("span", {
    className: ""
  }, "Judica\xEBl")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-16"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "text-base text-white/80 font-poppins leading-8"
  }, DESCRIPTION), /* @__PURE__ */ React.createElement("h4", {
    className: "text-base text-white/80 font-poppins leading-8 mt-8"
  }, "I am a big fan of open source. I contributed to open source project like Gatsbyjs, Abelljs, etc. I created some open source project, you can find some of them in the projects section (or visit my", " ", /* @__PURE__ */ React.createElement(ExternalLink_default, {
    label: /* @__PURE__ */ React.createElement("span", {
      className: "text-purple/80 hover:opacity-100 duration-300 font-poppins italic"
    }, "Github profile"),
    url: GITHUB_URL
  }), ")."), /* @__PURE__ */ React.createElement("h4", {
    className: "text-base text-white/80 font-poppins leading-8 mt-8"
  }, "If I\u2019m not coding, I am playing Dota or cooking(experimenting) some new things in the kitchen. If you happen to be in the same city I live (currently in Antananarivo MDG), maybe we can hang out and take some photos or code together.")));
};
var Hero_default = Hero;

// app/components/HighlightedProject.tsx
init_react();
var HighlightedProject = ({
  title,
  description,
  image,
  tags,
  url
}) => {
  return /* @__PURE__ */ React.createElement(ExternalLink_default, {
    url,
    label: /* @__PURE__ */ React.createElement("div", {
      className: "w-full gap-2 h-auto md:h-64 flex flex-col-reverse md:flex-row justify-between items-center md:p-8 bg-dark rounded-xl"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "flex flex-col p-8 md:p-0"
    }, /* @__PURE__ */ React.createElement("h4", {
      className: "text-white opacity-80 text-xl font-semibold font-poppins"
    }, title), /* @__PURE__ */ React.createElement("p", {
      className: "text-base font-poppins text-white opacity-60 mt-4"
    }, description), /* @__PURE__ */ React.createElement("div", {
      className: "flex flex-row gap-2 mt-2"
    }, tags == null ? void 0 : tags.map((tag) => /* @__PURE__ */ React.createElement("span", {
      className: "min-w-min p-2 px-3 bg-bgColor rounded-2xl text-white",
      key: tag
    }, "#", tag)))), /* @__PURE__ */ React.createElement("img", {
      src: image,
      alt: "lilslide",
      className: "w-full md:w-72 h-48 rounded-t-xl md:rounded-xl"
    }))
  });
};
var HighlightedProject_default = HighlightedProject;

// app/components/ProjectCard.tsx
init_react();
var ProjectCard = ({ name, desc, logo, link }) => {
  return /* @__PURE__ */ React.createElement(ExternalLink_default, {
    url: link,
    label: /* @__PURE__ */ React.createElement("div", {
      className: "w-full md:min-h-min h-100 bg-bgColor rounded-xl hover:bg-black duration-300 flex flex-row justify-start items-start p-4 cursor-pointer opacity-60 hover:opacity-80"
    }, /* @__PURE__ */ React.createElement("img", {
      src: logo,
      alt: name,
      className: "w-11 h-11 fill-white"
    }), /* @__PURE__ */ React.createElement("div", {
      className: "flex flex-col ml-4"
    }, /* @__PURE__ */ React.createElement("h4", {
      className: "font-poppins text-lg text-white"
    }, name), /* @__PURE__ */ React.createElement("p", {
      className: "font-poppins text-white text-xs"
    }, desc)))
  });
};
var ProjectCard_default = ProjectCard;

// app/components/Home/index.ts
init_react();

// app/components/Home/LatestProject/index.ts
init_react();

// mdx:/home/judi/Documents/code/judicael-portfolio/app/components/Home/LatestProject/LatestProject.mdx
init_react();
var import_react = __toModule(require("react"));

// app/components/ProjectList/ProjectList.tsx
init_react();
var ProjectList = ({
  projects: projects2,
  title,
  onGoing,
  description
}) => {
  return /* @__PURE__ */ React.createElement("section", {
    className: "w-full mt-24"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-8"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-4xl font-poppins font-semibold text-white"
  }, title), /* @__PURE__ */ React.createElement("h5", {
    className: "text-lg font-poppins text-white opacity-60 mt-2"
  }, description)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-4"
  }, /* @__PURE__ */ React.createElement(HighlightedProject_default, {
    url: onGoing.link,
    title: onGoing.name,
    description: onGoing.desc,
    image: onGoing.logo,
    tags: onGoing.tags
  }), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-2"
  }, projects2.map((project, projectIdx) => /* @__PURE__ */ React.createElement(ProjectCard_default, {
    name: project.name,
    desc: project.desc,
    logo: project.logo,
    link: project.link,
    key: projectIdx
  })))));
};
var ProjectList_default = ProjectList;

// mdx:/home/judi/Documents/code/judicael-portfolio/app/components/Home/LatestProject/LatestProject.mdx
var attributes = {
  "title": "Project",
  "description": "Lists of projects that I'm proud of.",
  "projects": {
    "Latest": [{
      "name": "create-api-rest",
      "desc": "A command line tool to create a backend api with node",
      "logo": "/projectLogo/logo-terminal.svg",
      "link": "https://github.com/judicaelandria/create-api-rest"
    }, {
      "name": "Bookshelf",
      "desc": "Mobile application to manage the books in a library",
      "logo": "/projectLogo/bookshelf.svg",
      "link": "https://github.com/judicaelandria/library-app"
    }, {
      "name": "Yannick",
      "desc": "Portfolio of a Machine learning engineeer",
      "logo": "/projectLogo/yannick-icon.png",
      "link": "https://yannick.vercel.app"
    }],
    "Ongoing": [{
      "name": "lilslide",
      "desc": "This is a lil web application to make slide very easily and with a very intuitive interface.",
      "logo": "/lilslide.png",
      "link": "https://github.com/judicaelandria/lilslide",
      "tags": ["WIP"]
    }]
  }
};
function MDXContent(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(ProjectList_default, {
    title: attributes.title,
    description: attributes.description,
    projects: attributes.projects.Latest,
    onGoing: attributes.projects.Ongoing[0]
  }));
  return MDXLayout ? /* @__PURE__ */ import_react.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var LatestProject_default = MDXContent;
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta2 = typeof attributes !== "undefined" && attributes.meta;

// app/projects.ts
init_react();
var projects = [
  {
    title: "create-api-rest",
    description: "A command line tool to create a backend api with node",
    logo: "/projectLogo/logo-terminal.svg",
    url: "https://github.com/judicaelandria/create-api-rest"
  },
  {
    title: "Bookshelf",
    description: "Mobile application to manage the books in a library",
    logo: "/projectLogo/bookshelf.svg",
    url: "https://github.com/judicaelandria/library-app"
  }
];
var getProjects = () => {
  return projects;
};

// route-module:/home/judi/Documents/code/judicael-portfolio/app/routes/index.tsx
function loader() {
  return getProjects();
}
function Index() {
  const [mounted, setMounted] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    setMounted(true);
  }, []);
  const projects2 = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("main", {
    className: "w-full min-h-screen bg-bgColor flex justify-center"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "max-w-2xl w-5/6"
  }, mounted ? /* @__PURE__ */ React.createElement(import_Navbar.default, null) : null, /* @__PURE__ */ React.createElement("article", null, /* @__PURE__ */ React.createElement(Hero_default, null), /* @__PURE__ */ React.createElement(LatestProject_default, null)), /* @__PURE__ */ React.createElement("footer", {
    className: "mt-32 mb-9"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "font-poppins text-white text-sm opacity-60"
  }, "Judica\xEBl A. \xA9 ", new Date().getFullYear()))));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgImVtcHR5LW1vZHVsZTouL05hdmJhci5jbGllbnQiLCAiPHN0ZGluPiIsICIuLi8uLi9hcHAvZW50cnkuc2VydmVyLnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvanVkaS9Eb2N1bWVudHMvY29kZS9qdWRpY2FlbC1wb3J0Zm9saW8vYXBwL3Jvb3QudHN4IiwgIi4uLy4uL2FwcC9jb25zdGFudHMudHMiLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvRXJyb3JCb3VuZGFyeS9FcnJvckJvdW5kYXJ5LnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvanVkaS9Eb2N1bWVudHMvY29kZS9qdWRpY2FlbC1wb3J0Zm9saW8vYXBwL3JvdXRlcy9pbmRleC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvaW5kZXgudHMiLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvSGVyby50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvRXh0ZXJuYWxMaW5rLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9IaWdobGlnaHRlZFByb2plY3QudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL1Byb2plY3RDYXJkLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9Ib21lL2luZGV4LnRzIiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL0hvbWUvTGF0ZXN0UHJvamVjdC9pbmRleC50cyIsICJtZHg6L2hvbWUvanVkaS9Eb2N1bWVudHMvY29kZS9qdWRpY2FlbC1wb3J0Zm9saW8vYXBwL2NvbXBvbmVudHMvSG9tZS9MYXRlc3RQcm9qZWN0L0xhdGVzdFByb2plY3QubWR4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL1Byb2plY3RMaXN0L1Byb2plY3RMaXN0LnRzeCIsICIuLi8uLi9hcHAvcHJvamVjdHMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIm1vZHVsZS5leHBvcnRzID0ge307IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9ob21lL2p1ZGkvRG9jdW1lbnRzL2NvZGUvanVkaWNhZWwtcG9ydGZvbGlvL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9ob21lL2p1ZGkvRG9jdW1lbnRzL2NvZGUvanVkaWNhZWwtcG9ydGZvbGlvL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvaG9tZS9qdWRpL0RvY3VtZW50cy9jb2RlL2p1ZGljYWVsLXBvcnRmb2xpby9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24sIExpbmtzRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdGFpbHdpbmQuY3NzXCI7XG5pbXBvcnQge1xuICBERVNDUklQVElPTixcbiAgRE9NQUlOUyxcbiAgU09DSUFMX0lNQUdFX1VSTCxcbiAgVElUTEUsXG4gIFRXSVRURVJfREVTQ1JJUFRJT04sXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IGdsb2JhbFN0eWxlcyBmcm9tIFwifi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IEVycm9yQm91bmRhcnlQYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvRXJyb3JCb3VuZGFyeS9FcnJvckJvdW5kYXJ5XCI7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9LFxuICAgIHsgcmVsOiBcInByZWNvbm5lY3RcIiwgaHJlZjogXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgfSxcbiAgICB7XG4gICAgICByZWw6IFwicHJlY29ubmVjdFwiLFxuICAgICAgaHJlZjogXCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIsXG4gICAgICBjcm9zc09yaWdpbjogXCJhbm9ueW1vdXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICBocmVmOiBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICBocmVmOiBnbG9iYWxTdHlsZXMsXG4gICAgfSxcbiAgXTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgXCJvZzpsb2NhbGVcIjogXCJlblwiLFxuICAgIFwib2c6c2l0ZV9uYW1lXCI6IFwiSnVkaWNhXHUwMEVCbFwiLFxuICAgIFwib2c6dHlwZVwiOiBcIndlYnNpdGVcIixcbiAgICBcIm9nOmRlc2NyaXB0aW9uXCI6IERFU0NSSVBUSU9OLFxuICAgIFwib2c6dXJsXCI6IERPTUFJTlMsXG4gICAgXCJvZzp0aXRsZVwiOiBUSVRMRSxcbiAgICBcIm9nOmltYWdlXCI6IFNPQ0lBTF9JTUFHRV9VUkwsXG4gICAgXCJ0d2l0dGVyOmNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG4gICAgXCJ0d2l0dGVyOmNyZWF0b3JcIjogXCJAanVkaWNhZWxfYW5kcmlhXCIsXG4gICAgXCJ0d2l0dGVyOnNpdGVcIjogXCJAanVkaWNhZWxfYW5kcmlhXCIsXG4gICAgXCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCI6IFRXSVRURVJfREVTQ1JJUFRJT04sXG4gICAgXCJ0d2l0dGVyOmltYWdlXCI6IFNPQ0lBTF9JTUFHRV9VUkwsXG4gICAgXCJ0d2l0dGVyOnRpdGxlXCI6IFRJVExFLFxuICAgIFwiWC1VQS1Db21wYXRpYmxlXCI6IFwiSUU9ZWRnZSxjaHJvbWU9MVwiLFxuICAgIGF1dGhvcjogXCJKdWRpY2FcdTAwRUJsXCIsXG4gICAgSGFuZGhlbGRGcmllbmRseTogXCJUcnVlXCIsXG4gICAgbGFuZ3VhZ2U6IFwiZW5cIixcbiAgICBwYWdlbmFtZTogXCJKdWRpY2FcdTAwRUJsXCIsXG4gICAgcm9ib3RzOiBcImluZGV4LCBmb2xsb3dcIixcbiAgICB0aXRsZTogVElUTEUsXG4gICAgZGVzY3JpcHRpb246IERFU0NSSVBUSU9OLFxuICAgIHZpZXdwb3J0OiBcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCB2aWV3cG9ydC1maXQ9Y292ZXJcIixcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KCkge1xuICByZXR1cm4gPEVycm9yQm91bmRhcnlQYWdlIC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS94LWljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImV4cG9ydCBjb25zdCBUV0lUVEVSX1VSTCA9IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9qdWRpY2FlbF9hbmRyaWFcIjtcbmV4cG9ydCBjb25zdCBHSVRIVUJfVVJMID0gXCJodHRwczovL2dpdGh1Yi5jb20vanVkaWNhZWxhbmRyaWFcIjtcbmV4cG9ydCBjb25zdCBFTUFJTCA9IFwianVkaWNhZWxhbmRyaWE3QGdtYWlsLmNvbVwiO1xuZXhwb3J0IGNvbnN0IERPTUFJTlMgPSBcImh0dHBzOi8vanVkaWNhZWwudmVyY2VsLmFwcFwiO1xuXG5leHBvcnQgY29uc3QgVElUTEUgPSBcIkp1ZGljYVx1MDBFQmwgQS4gLS0gRGVzaWduZXIsIGRldmVsb3BlclwiO1xuZXhwb3J0IGNvbnN0IERFU0NSSVBUSU9OID1cbiAgXCJXZWxjb21lIHRvIG15IGRpZ2l0YWwgZ2FyZGVuLCB0aGlzIGlzIHRoZSBwbGFjZSB3aGVyZSBJIHNoYXJlIHNvbWUgb2YgIHNpZGUgcHJvamVjdHMuIEkgbG92ZSBidWlsZGluZyBhbmQgZXhwZXJpbWVudGluZyB0aGluZ3MgdG8gbGVhcm4gbW9yZSBhYm91dCB0aGUgd2ViIGFuZCBtb2JpbGUuIEkgdGhpbmsgdGhpcyBpcyB0aGUgbW9zdCBlZmZlY3RpdmUgd2F5IG9mIGxlYXJuaW5nLiBEcmVhbWluIHVwIGFuZCBidWlsZGluZyBhIHByb2plY3QgdGhhdCBJIHdpc2ggZXhpc3RlZCBpcyBteSAgcGFzc2lvbiBvciBwcm9qZWN0IHRoYXQgZXhpc3QgYnV0IEkgY2FuIGRvIHNvbWV0aGluZyB0byBtYWtlIGl0IG1vcmUgYXdlc29tZS5cIjtcbmV4cG9ydCBjb25zdCBUV0lUVEVSX0RFU0NSSVBUSU9OID1cbiAgXCJXZWxjb21lIHRvIG15IGRpZ2l0YWwgZ2FyZGVuLCB0aGlzIGlzIHRoZSBwbGFjZSB3aGVyZSBJIHNoYXJlIHNvbWUgb2YgIHNpZGUgcHJvamVjdHMuIEkgbG92ZSBidWlsZGluZyBhbmQgZXhwZXJpbWVudGluZyB0aGluZ3MgdG8gbGVhcm4gbW9yZSBhYm91dCB0aGUgd2ViIGFuZCBtb2JpbGUuIEkgdGhpbmsgdGhpcyBpcyB0aGUgYmVzdCB3YXkgdG8gbGVhcm4gZm9yIG1lLlwiO1xuXG5leHBvcnQgY29uc3QgU09DSUFMX0lNQUdFX1VSTCA9XG4gIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVkaWNhZWwvaW1hZ2UvdXBsb2FkL3YxNjQyNTA0Mjc0L3BlcnNvbm5hbC13ZWJzaXRlL3NvY2lhbF9jZGc3ZWEucG5nXCI7XG4iLCAiaW1wb3J0IHsgTGlua3MsIE1ldGEsIFNjcmlwdHMgfSBmcm9tIFwicmVtaXhcIjtcblxuY29uc3QgRXJyb3JCb3VuZGFyeVBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGh0bWw+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPHRpdGxlPk9oIG5vITwvdGl0bGU+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIHsvKiBhZGQgdGhlIFVJIHlvdSB3YW50IHlvdXIgdXNlcnMgdG8gc2VlICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWluLWgtc2NyZWVuIGJnLWJnQ29sb3IgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC13aGl0ZSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgT2ggbm8gOigsIHNvcnJ5IGFib3V0IHRoYXQhXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHRleHQtd2hpdGUvODBcIj5cbiAgICAgICAgICAgIFdlJ3JlIGFjdHVhbGx5IGZhY2luZyBhbiBlcnJvciwgcmVsb2FkIHRoZSBwYWdlIHBsZWFzZVxuICAgICAgICAgIDwvaDQ+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFcnJvckJvdW5kYXJ5UGFnZTtcbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBIZXJvLCBMYXRlc3RQcm9qZWN0LCBOYXZiYXIgfSBmcm9tIFwifi9jb21wb25lbnRzXCI7XG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tIFwifi9jb21wb25lbnRzL0Vycm9yQm91bmRhcnkvRXJyb3JCb3VuZGFyeVwiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdHMgfSBmcm9tIFwifi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgSVByb2plY3QgfSBmcm9tIFwifi90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZGVyKCkge1xuICByZXR1cm4gZ2V0UHJvamVjdHMoKTtcbn1cblxuPEVycm9yQm91bmRhcnkgLz47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRNb3VudGVkKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcHJvamVjdHM6IElQcm9qZWN0W10gPSB1c2VMb2FkZXJEYXRhKCk7XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwidy1mdWxsIG1pbi1oLXNjcmVlbiBiZy1iZ0NvbG9yIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1heC13LTJ4bCB3LTUvNlwiPlxuICAgICAgICB7bW91bnRlZCA/IDxOYXZiYXIgLz4gOiBudWxsfVxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICA8SGVybyAvPlxuICAgICAgICAgIDxMYXRlc3RQcm9qZWN0IC8+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJtdC0zMiBtYi05XCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1wb3BwaW5zIHRleHQtd2hpdGUgdGV4dC1zbSBvcGFjaXR5LTYwXCI+XG4gICAgICAgICAgICBKdWRpY2FcdTAwRUJsIEEuICZjb3B5OyB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9tYWluPlxuICApO1xufVxuIiwgImV4cG9ydCB7IGRlZmF1bHQgYXMgTmF2YmFyIH0gZnJvbSBcIi4vTmF2YmFyLmNsaWVudFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZXJvIH0gZnJvbSBcIi4vSGVyb1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFeHRlcm5hbExpbmsgfSBmcm9tIFwiLi9FeHRlcm5hbExpbmtcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGlnaGxpZ2h0ZWRQcm9qZWN0IH0gZnJvbSBcIi4vSGlnaGxpZ2h0ZWRQcm9qZWN0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RDYXJkIH0gZnJvbSBcIi4vUHJvamVjdENhcmRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL0hvbWVcIjtcbiIsICJpbXBvcnQgeyBERVNDUklQVElPTiwgR0lUSFVCX1VSTCB9IGZyb20gXCJ+L2NvbnN0YW50c1wiO1xuaW1wb3J0IEV4dGVybmFsTGluayBmcm9tIFwiLi9FeHRlcm5hbExpbmtcIjtcblxuY29uc3QgSGVybyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMjggZmxleCBmbGV4LWNvbCBnYXAtNCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTV4bCB0ZXh0LXdoaXRlIGZvbnQtcG9wcGlucyBmb250LXNlbWlib2xkIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICBIb3dkeSwgSSdtIDxzcGFuIGNsYXNzTmFtZT1cIlwiPkp1ZGljYVx1MDBFQmw8L3NwYW4+XG4gICAgICA8L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xNlwiPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHRleHQtd2hpdGUvODAgZm9udC1wb3BwaW5zIGxlYWRpbmctOFwiPlxuICAgICAgICAgIHtERVNDUklQVElPTn1cbiAgICAgICAgPC9oND5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LXdoaXRlLzgwIGZvbnQtcG9wcGlucyBsZWFkaW5nLTggbXQtOFwiPlxuICAgICAgICAgIEkgYW0gYSBiaWcgZmFuIG9mIG9wZW4gc291cmNlLiBJIGNvbnRyaWJ1dGVkIHRvIG9wZW4gc291cmNlIHByb2plY3RcbiAgICAgICAgICBsaWtlIEdhdHNieWpzLCBBYmVsbGpzLCBldGMuIEkgY3JlYXRlZCBzb21lIG9wZW4gc291cmNlIHByb2plY3QsIHlvdVxuICAgICAgICAgIGNhbiBmaW5kIHNvbWUgb2YgdGhlbSBpbiB0aGUgcHJvamVjdHMgc2VjdGlvbiAob3IgdmlzaXQgbXl7XCIgXCJ9XG4gICAgICAgICAge1xuICAgICAgICAgICAgPEV4dGVybmFsTGlua1xuICAgICAgICAgICAgICBsYWJlbD17XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wdXJwbGUvODAgaG92ZXI6b3BhY2l0eS0xMDAgZHVyYXRpb24tMzAwIGZvbnQtcG9wcGlucyBpdGFsaWNcIj5cbiAgICAgICAgICAgICAgICAgIEdpdGh1YiBwcm9maWxlXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHVybD17R0lUSFVCX1VSTH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICAgICkuXG4gICAgICAgIDwvaDQ+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC13aGl0ZS84MCBmb250LXBvcHBpbnMgbGVhZGluZy04IG10LThcIj5cbiAgICAgICAgICBJZiBJXHUyMDE5bSBub3QgY29kaW5nLCBJIGFtIHBsYXlpbmcgRG90YSBvciBjb29raW5nKGV4cGVyaW1lbnRpbmcpIHNvbWVcbiAgICAgICAgICBuZXcgdGhpbmdzIGluIHRoZSBraXRjaGVuLiBJZiB5b3UgaGFwcGVuIHRvIGJlIGluIHRoZSBzYW1lIGNpdHkgSSBsaXZlXG4gICAgICAgICAgKGN1cnJlbnRseSBpbiBBbnRhbmFuYXJpdm8gTURHKSwgbWF5YmUgd2UgY2FuIGhhbmcgb3V0IGFuZCB0YWtlIHNvbWVcbiAgICAgICAgICBwaG90b3Mgb3IgY29kZSB0b2dldGhlci5cbiAgICAgICAgPC9oND5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG4iLCAiaW50ZXJmYWNlIElFeHRlcm5hbExpbmtQcm9wcyB7XG4gIGxhYmVsOiBzdHJpbmcgfCBSZWFjdC5SZWFjdE5vZGU7XG4gIHVybDogc3RyaW5nO1xufVxuXG5jb25zdCBFeHRlcm5hbExpbmsgPSAoeyBsYWJlbCwgdXJsIH06IElFeHRlcm5hbExpbmtQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIiBjbGFzc05hbWU9XCJmb250LXBvcHBpbnNcIj5cbiAgICAgIHtsYWJlbH1cbiAgICA8L2E+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHRlcm5hbExpbms7XG4iLCAiaW1wb3J0IEV4dGVybmFsTGluayBmcm9tIFwiLi9FeHRlcm5hbExpbmtcIjtcblxuaW50ZXJmYWNlIElIaWdobGlnaHRlZFByb2plY3RQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIHRhZ3M/OiBzdHJpbmdbXTtcbiAgdXJsOiBzdHJpbmc7XG59XG5cbmNvbnN0IEhpZ2hsaWdodGVkUHJvamVjdCA9ICh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgaW1hZ2UsXG4gIHRhZ3MsXG4gIHVybCxcbn06IElIaWdobGlnaHRlZFByb2plY3RQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxFeHRlcm5hbExpbmtcbiAgICAgIHVybD17dXJsfVxuICAgICAgbGFiZWw9e1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBnYXAtMiBoLWF1dG8gbWQ6aC02NCBmbGV4IGZsZXgtY29sLXJldmVyc2UgbWQ6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtZDpwLTggYmctZGFyayByb3VuZGVkLXhsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtOCBtZDpwLTBcIj5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG9wYWNpdHktODAgdGV4dC14bCBmb250LXNlbWlib2xkIGZvbnQtcG9wcGluc1wiPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtcG9wcGlucyB0ZXh0LXdoaXRlIG9wYWNpdHktNjAgbXQtNFwiPlxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZ2FwLTIgbXQtMlwiPlxuICAgICAgICAgICAgICB7dGFncz8ubWFwKCh0YWcpID0+IChcbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluLXctbWluIHAtMiBweC0zIGJnLWJnQ29sb3Igcm91bmRlZC0yeGwgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICBrZXk9e3RhZ31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAje3RhZ31cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgIGFsdD1cImxpbHNsaWRlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTcyIGgtNDggcm91bmRlZC10LXhsIG1kOnJvdW5kZWQteGxcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIaWdobGlnaHRlZFByb2plY3Q7XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEV4dGVybmFsTGluayBmcm9tIFwiLi9FeHRlcm5hbExpbmtcIjtcblxuaW50ZXJmYWNlIElQcm9qZWN0Q2FyZFByb3BzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjOiBzdHJpbmc7XG4gIGxvZ286IHN0cmluZztcbiAgbGluazogc3RyaW5nO1xufVxuXG5jb25zdCBQcm9qZWN0Q2FyZCA9ICh7IG5hbWUsIGRlc2MsIGxvZ28sIGxpbmsgfTogSVByb2plY3RDYXJkUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RXh0ZXJuYWxMaW5rXG4gICAgICB1cmw9e2xpbmt9XG4gICAgICBsYWJlbD17XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOm1pbi1oLW1pbiBoLTEwMCBiZy1iZ0NvbG9yIHJvdW5kZWQteGwgaG92ZXI6YmctYmxhY2sgZHVyYXRpb24tMzAwIGZsZXggZmxleC1yb3cganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCBwLTQgY3Vyc29yLXBvaW50ZXIgb3BhY2l0eS02MCBob3ZlcjpvcGFjaXR5LTgwXCI+XG4gICAgICAgICAgPGltZyBzcmM9e2xvZ299IGFsdD17bmFtZX0gY2xhc3NOYW1lPVwidy0xMSBoLTExIGZpbGwtd2hpdGVcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtbC00XCI+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1wb3BwaW5zIHRleHQtbGcgdGV4dC13aGl0ZVwiPntuYW1lfTwvaDQ+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXBvcHBpbnMgdGV4dC13aGl0ZSB0ZXh0LXhzXCI+e2Rlc2N9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQ7XG4iLCAiZXhwb3J0IHsgZGVmYXVsdCBhcyBMYXRlc3RQcm9qZWN0IH0gZnJvbSBcIi4vTGF0ZXN0UHJvamVjdFwiO1xuIiwgImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9MYXRlc3RQcm9qZWN0Lm1keFwiO1xuIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJ0aXRsZVwiOiBcIlByb2plY3RcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkxpc3RzIG9mIHByb2plY3RzIHRoYXQgSSdtIHByb3VkIG9mLlwiLFxuICBcInByb2plY3RzXCI6IHtcbiAgICBcIkxhdGVzdFwiOiBbe1xuICAgICAgXCJuYW1lXCI6IFwiY3JlYXRlLWFwaS1yZXN0XCIsXG4gICAgICBcImRlc2NcIjogXCJBIGNvbW1hbmQgbGluZSB0b29sIHRvIGNyZWF0ZSBhIGJhY2tlbmQgYXBpIHdpdGggbm9kZVwiLFxuICAgICAgXCJsb2dvXCI6IFwiL3Byb2plY3RMb2dvL2xvZ28tdGVybWluYWwuc3ZnXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwczovL2dpdGh1Yi5jb20vanVkaWNhZWxhbmRyaWEvY3JlYXRlLWFwaS1yZXN0XCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJCb29rc2hlbGZcIixcbiAgICAgIFwiZGVzY1wiOiBcIk1vYmlsZSBhcHBsaWNhdGlvbiB0byBtYW5hZ2UgdGhlIGJvb2tzIGluIGEgbGlicmFyeVwiLFxuICAgICAgXCJsb2dvXCI6IFwiL3Byb2plY3RMb2dvL2Jvb2tzaGVsZi5zdmdcIixcbiAgICAgIFwibGlua1wiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qdWRpY2FlbGFuZHJpYS9saWJyYXJ5LWFwcFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiWWFubmlja1wiLFxuICAgICAgXCJkZXNjXCI6IFwiUG9ydGZvbGlvIG9mIGEgTWFjaGluZSBsZWFybmluZyBlbmdpbmVlZXJcIixcbiAgICAgIFwibG9nb1wiOiBcIi9wcm9qZWN0TG9nby95YW5uaWNrLWljb24ucG5nXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwczovL3lhbm5pY2sudmVyY2VsLmFwcFwiXG4gICAgfV0sXG4gICAgXCJPbmdvaW5nXCI6IFt7XG4gICAgICBcIm5hbWVcIjogXCJsaWxzbGlkZVwiLFxuICAgICAgXCJkZXNjXCI6IFwiVGhpcyBpcyBhIGxpbCB3ZWIgYXBwbGljYXRpb24gdG8gbWFrZSBzbGlkZSB2ZXJ5IGVhc2lseSBhbmQgd2l0aCBhIHZlcnkgaW50dWl0aXZlIGludGVyZmFjZS5cIixcbiAgICAgIFwibG9nb1wiOiBcIi9saWxzbGlkZS5wbmdcIixcbiAgICAgIFwibGlua1wiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qdWRpY2FlbGFuZHJpYS9saWxzbGlkZVwiLFxuICAgICAgXCJ0YWdzXCI6IFtcIldJUFwiXVxuICAgIH1dXG4gIH1cbn07XG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSBcIi4uLy4uL1Byb2plY3RMaXN0L1Byb2plY3RMaXN0XCI7XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjxQcm9qZWN0TGlzdCB0aXRsZT17YXR0cmlidXRlcy50aXRsZX0gZGVzY3JpcHRpb249e2F0dHJpYnV0ZXMuZGVzY3JpcHRpb259IHByb2plY3RzPXthdHRyaWJ1dGVzLnByb2plY3RzLkxhdGVzdH0gb25Hb2luZz17YXR0cmlidXRlcy5wcm9qZWN0cy5PbmdvaW5nWzBdfSAvPjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwiTGF0ZXN0UHJvamVjdC5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgImltcG9ydCB7IElQcm9qZWN0IH0gZnJvbSBcIn4vdHlwZXNcIjtcbmltcG9ydCB7IEhpZ2hsaWdodGVkUHJvamVjdCwgUHJvamVjdENhcmQgfSBmcm9tIFwiLi5cIjtcblxuaW50ZXJmYWNlIElPbkdvaW5nUHJvamVjdCBleHRlbmRzIElQcm9qZWN0IHtcbiAgdGFnczogc3RyaW5nW107XG59XG5cbmludGVyZmFjZSBJUHJvamVjdExpc3RQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHByb2plY3RzOiBJUHJvamVjdFtdO1xuICBvbkdvaW5nOiBJT25Hb2luZ1Byb2plY3Q7XG59XG5cbmNvbnN0IFByb2plY3RMaXN0ID0gKHtcbiAgcHJvamVjdHMsXG4gIHRpdGxlLFxuICBvbkdvaW5nLFxuICBkZXNjcmlwdGlvbixcbn06IElQcm9qZWN0TGlzdFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidy1mdWxsIG10LTI0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtcG9wcGlucyBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtcG9wcGlucyB0ZXh0LXdoaXRlIG9wYWNpdHktNjAgbXQtMlwiPlxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgPC9oNT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCI+XG4gICAgICAgIDxIaWdobGlnaHRlZFByb2plY3RcbiAgICAgICAgICB1cmw9e29uR29pbmcubGlua31cbiAgICAgICAgICB0aXRsZT17b25Hb2luZy5uYW1lfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtvbkdvaW5nLmRlc2N9XG4gICAgICAgICAgaW1hZ2U9e29uR29pbmcubG9nb31cbiAgICAgICAgICB0YWdzPXtvbkdvaW5nLnRhZ3N9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtMlwiPlxuICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIHByb2plY3RJZHgpID0+IChcbiAgICAgICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgICAgICBuYW1lPXtwcm9qZWN0Lm5hbWV9XG4gICAgICAgICAgICAgIGRlc2M9e3Byb2plY3QuZGVzY31cbiAgICAgICAgICAgICAgbG9nbz17cHJvamVjdC5sb2dvfVxuICAgICAgICAgICAgICBsaW5rPXtwcm9qZWN0Lmxpbmt9XG4gICAgICAgICAgICAgIGtleT17cHJvamVjdElkeH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdExpc3Q7XG4iLCAiaW1wb3J0IHsgSVByb2plY3QgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBwcm9qZWN0czogSVByb2plY3RbXSA9IFtcbiAge1xuICAgIHRpdGxlOiBcImNyZWF0ZS1hcGktcmVzdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgY29tbWFuZCBsaW5lIHRvb2wgdG8gY3JlYXRlIGEgYmFja2VuZCBhcGkgd2l0aCBub2RlXCIsXG4gICAgbG9nbzogXCIvcHJvamVjdExvZ28vbG9nby10ZXJtaW5hbC5zdmdcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2p1ZGljYWVsYW5kcmlhL2NyZWF0ZS1hcGktcmVzdFwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQm9va3NoZWxmXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTW9iaWxlIGFwcGxpY2F0aW9uIHRvIG1hbmFnZSB0aGUgYm9va3MgaW4gYSBsaWJyYXJ5XCIsXG4gICAgbG9nbzogXCIvcHJvamVjdExvZ28vYm9va3NoZWxmLnN2Z1wiLFxuICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vanVkaWNhZWxhbmRyaWEvbGlicmFyeS1hcHBcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9qZWN0cyA9ICgpOiBJUHJvamVjdFtdID0+IHtcbiAgcmV0dXJuIHByb2plY3RzO1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsVUFBVTtBQUFBLE1BQ3ZDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG9CQUFvQjtBQUFBLE1BQ2pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUM1SWxDO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxnQkFBZ0IsUUFBUTtBQUk1QixXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLHdCQUF3QjtBQUFBLE1BQ3JELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNwRDFDO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ2hDakM7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFNBQVM7QUFDYixRQUFJLFNBQVM7QUFDYixRQUFJLFdBQVc7QUFJZixXQUFPLEtBQUssUUFBUSxRQUFRLFNBQVUsR0FBRztBQUN4QyxVQUFJLE1BQU0sYUFBYSxDQUFDLFFBQVEsZUFBZTtBQUFJLGVBQU8sZUFBZSxTQUFTLEdBQUc7QUFBQSxVQUNwRixZQUFZO0FBQUEsVUFDWixLQUFLLFdBQVk7QUFBRSxtQkFBTyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBR25DLFdBQU8sS0FBSyxRQUFRLFFBQVEsU0FBVSxHQUFHO0FBQ3hDLFVBQUksTUFBTSxhQUFhLENBQUMsUUFBUSxlQUFlO0FBQUksZUFBTyxlQUFlLFNBQVMsR0FBRztBQUFBLFVBQ3BGLFlBQVk7QUFBQSxVQUNaLEtBQUssV0FBWTtBQUFFLG1CQUFPLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFHbkMsV0FBTyxLQUFLLFVBQVUsUUFBUSxTQUFVLEdBQUc7QUFDMUMsVUFBSSxNQUFNLGFBQWEsQ0FBQyxRQUFRLGVBQWU7QUFBSSxlQUFPLGVBQWUsU0FBUyxHQUFHO0FBQUEsVUFDcEYsWUFBWTtBQUFBLFVBQ1osS0FBSyxXQUFZO0FBQUUsbUJBQU8sU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ25DckM7QUFBQTtBQUFBO0FBQUEsWUFBTyxVQUFVO0FBQUE7QUFBQTs7O0FDQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUErQjtBQUMvQixtQkFBNEI7QUFHYix1QkFDYixTQUNBLG9CQUNBLGlCQUNBLGNBQ0E7QUFDQSxRQUFNLFNBQVMsa0NBQ2Isb0NBQUMsMEJBQUQ7QUFBQSxJQUFhLFNBQVM7QUFBQSxJQUFjLEtBQUssUUFBUTtBQUFBO0FBR25ELGtCQUFnQixJQUFJLGdCQUFnQjtBQUVwQyxTQUFPLElBQUksU0FBUyxvQkFBb0IsUUFBUTtBQUFBLElBQzlDLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQTtBQUFBOzs7QUNsQmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU9POzs7Ozs7QUNQUDtBQUNPLElBQU0sYUFBYTtBQUVuQixJQUFNLFVBQVU7QUFFaEIsSUFBTSxRQUFRO0FBQ2QsSUFBTSxjQUNYO0FBQ0ssSUFBTSxzQkFDWDtBQUVLLElBQU0sbUJBQ1g7Ozs7OztBQ1pGO0FBQUEsb0JBQXFDO0FBRXJDLElBQU0sb0JBQW9CLE1BQU07QUFDOUIsU0FDRSxvQ0FBQyxRQUFELE1BQ0Usb0NBQUMsUUFBRCxNQUNFLG9DQUFDLFNBQUQsTUFBTyxXQUNQLG9DQUFDLG9CQUFELE9BQ0Esb0NBQUMscUJBQUQsUUFFRixvQ0FBQyxRQUFELE1BRUUsb0NBQUMsV0FBRDtBQUFBLElBQVMsV0FBVTtBQUFBLEtBQ2pCLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUFrQyxnQ0FHaEQsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQTBCLDREQUkxQyxvQ0FBQyx1QkFBRDtBQUFBO0FBTVIsSUFBTyx3QkFBUTs7O0FGTlIsSUFBTSxRQUF1QixNQUFNO0FBQ3hDLFNBQU87QUFBQSxJQUNMLEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQSxJQUMzQixFQUFFLEtBQUssY0FBYyxNQUFNO0FBQUEsSUFDM0I7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQTtBQUFBLElBRWY7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQTtBQUFBLElBRVI7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFLTCxJQUFNLE9BQXFCLE1BQU07QUFDdEMsU0FBTztBQUFBLElBQ0wsYUFBYTtBQUFBLElBQ2IsZ0JBQWdCO0FBQUEsSUFDaEIsV0FBVztBQUFBLElBQ1gsa0JBQWtCO0FBQUEsSUFDbEIsVUFBVTtBQUFBLElBQ1YsWUFBWTtBQUFBLElBQ1osWUFBWTtBQUFBLElBQ1osZ0JBQWdCO0FBQUEsSUFDaEIsbUJBQW1CO0FBQUEsSUFDbkIsZ0JBQWdCO0FBQUEsSUFDaEIsdUJBQXVCO0FBQUEsSUFDdkIsaUJBQWlCO0FBQUEsSUFDakIsaUJBQWlCO0FBQUEsSUFDakIsbUJBQW1CO0FBQUEsSUFDbkIsUUFBUTtBQUFBLElBQ1Isa0JBQWtCO0FBQUEsSUFDbEIsVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBO0FBQUE7QUFJUCx5QkFBeUI7QUFDOUIsU0FBTyxvQ0FBQyx1QkFBRDtBQUFBO0FBR00sZUFBZTtBQUM1QixTQUNFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLE1BQUs7QUFBQSxLQUNULG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxTQUFRO0FBQUEsTUFDZCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxLQUFJO0FBQUEsSUFBTyxNQUFLO0FBQUEsSUFBZSxNQUFLO0FBQUEsTUFDMUMsb0NBQUMsb0JBQUQsT0FDQSxvQ0FBQyxxQkFBRCxRQUVGLG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxzQkFBRCxPQUNBLG9DQUFDLGlDQUFELE9BQ0Esb0NBQUMsdUJBQUQsT0FDMkMsb0NBQUMsMEJBQUQ7QUFBQTs7O0FHcEZuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBb0M7QUFDcEMsb0JBQThCOzs7QUNEOUI7QUFBQSxvQkFBa0M7OztBQ0FsQzs7O0FDQUE7QUFLQSxJQUFNLGVBQWUsQ0FBQyxFQUFFLE9BQU8sVUFBOEI7QUFDM0QsU0FDRSxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxNQUFNO0FBQUEsSUFBSyxRQUFPO0FBQUEsSUFBUyxLQUFJO0FBQUEsSUFBVyxXQUFVO0FBQUEsS0FDcEQ7QUFBQTtBQUtQLElBQU8sdUJBQVE7OztBRFZmLElBQU0sT0FBTyxNQUFNO0FBQ2pCLFNBQ0Usb0NBQUMsV0FBRDtBQUFBLElBQVMsV0FBVTtBQUFBLEtBQ2pCLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUE2RSxlQUM5RSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBRyxpQkFFaEMsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQ1gsY0FFSCxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBc0QsdU1BR1AsS0FFekQsb0NBQUMsc0JBQUQ7QUFBQSxJQUNFLE9BQ0Usb0NBQUMsUUFBRDtBQUFBLE1BQU0sV0FBVTtBQUFBLE9BQW9FO0FBQUEsSUFJdEYsS0FBSztBQUFBLE1BRVIsT0FHSCxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBc0Q7QUFBQTtBQVc1RSxJQUFPLGVBQVE7OztBRXhDZjtBQVVBLElBQU0scUJBQXFCLENBQUM7QUFBQSxFQUMxQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxNQUM4QjtBQUM5QixTQUNFLG9DQUFDLHNCQUFEO0FBQUEsSUFDRTtBQUFBLElBQ0EsT0FDRSxvQ0FBQyxPQUFEO0FBQUEsTUFBSyxXQUFVO0FBQUEsT0FDYixvQ0FBQyxPQUFEO0FBQUEsTUFBSyxXQUFVO0FBQUEsT0FDYixvQ0FBQyxNQUFEO0FBQUEsTUFBSSxXQUFVO0FBQUEsT0FDWCxRQUVILG9DQUFDLEtBQUQ7QUFBQSxNQUFHLFdBQVU7QUFBQSxPQUNWLGNBRUgsb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ1osNkJBQU0sSUFBSSxDQUFDLFFBQ1Ysb0NBQUMsUUFBRDtBQUFBLE1BQ0UsV0FBVTtBQUFBLE1BQ1YsS0FBSztBQUFBLE9BQ04sS0FDRyxTQUtWLG9DQUFDLE9BQUQ7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLEtBQUk7QUFBQSxNQUNKLFdBQVU7QUFBQTtBQUFBO0FBQUE7QUFRdEIsSUFBTyw2QkFBUTs7O0FDbkRmO0FBVUEsSUFBTSxjQUFjLENBQUMsRUFBRSxNQUFNLE1BQU0sTUFBTSxXQUE4QjtBQUNyRSxTQUNFLG9DQUFDLHNCQUFEO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxPQUNFLG9DQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9DQUFDLE9BQUQ7QUFBQSxNQUFLLEtBQUs7QUFBQSxNQUFNLEtBQUs7QUFBQSxNQUFNLFdBQVU7QUFBQSxRQUNyQyxvQ0FBQyxPQUFEO0FBQUEsTUFBSyxXQUFVO0FBQUEsT0FDYixvQ0FBQyxNQUFEO0FBQUEsTUFBSSxXQUFVO0FBQUEsT0FBbUMsT0FDakQsb0NBQUMsS0FBRDtBQUFBLE1BQUcsV0FBVTtBQUFBLE9BQW1DO0FBQUE7QUFBQTtBQVE1RCxJQUFPLHNCQUFROzs7QUMzQmY7OztBQ0FBOzs7QUNBQTtBQUVBLG1CQUFrQjs7O0FDRmxCO0FBY0EsSUFBTSxjQUFjLENBQUM7QUFBQSxFQUNuQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLE1BQ3VCO0FBQ3ZCLFNBQ0Usb0NBQUMsV0FBRDtBQUFBLElBQVMsV0FBVTtBQUFBLEtBQ2pCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUNYLFFBRUgsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQ1gsZUFHTCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyw0QkFBRDtBQUFBLElBQ0UsS0FBSyxRQUFRO0FBQUEsSUFDYixPQUFPLFFBQVE7QUFBQSxJQUNmLGFBQWEsUUFBUTtBQUFBLElBQ3JCLE9BQU8sUUFBUTtBQUFBLElBQ2YsTUFBTSxRQUFRO0FBQUEsTUFFaEIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1osVUFBUyxJQUFJLENBQUMsU0FBUyxlQUN0QixvQ0FBQyxxQkFBRDtBQUFBLElBQ0UsTUFBTSxRQUFRO0FBQUEsSUFDZCxNQUFNLFFBQVE7QUFBQSxJQUNkLE1BQU0sUUFBUTtBQUFBLElBQ2QsTUFBTSxRQUFRO0FBQUEsSUFDZCxLQUFLO0FBQUE7QUFBQTtBQVNuQixJQUFPLHNCQUFROzs7QURuRFIsSUFBTSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLEVBQ1QsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLElBQ1YsVUFBVSxDQUFDO0FBQUEsTUFDVCxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsT0FDUDtBQUFBLE1BQ0QsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE9BQ1A7QUFBQSxNQUNELFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQTtBQUFBLElBRVYsV0FBVyxDQUFDO0FBQUEsTUFDVixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixRQUFRLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFLZixvQkFBb0IsUUFBUSxJQUFJO0FBQzlCLFFBQU0sY0FBYyxPQUFPLE9BQU8sSUFBSSxNQUFNLGFBQWEsRUFBQyxTQUFTLGNBQWE7QUFDaEYsUUFBTSxXQUFXLHdGQUFFLG1EQUFDLHFCQUFEO0FBQUEsSUFBYSxPQUFPLFdBQVc7QUFBQSxJQUFPLGFBQWEsV0FBVztBQUFBLElBQWEsVUFBVSxXQUFXLFNBQVM7QUFBQSxJQUFRLFNBQVMsV0FBVyxTQUFTLFFBQVE7QUFBQTtBQUN6SyxTQUFPLFlBQVksbURBQUMsV0FBRCxtQkFBZSxRQUFRLFlBQXdCO0FBQUE7QUFFcEUsSUFBTyx3QkFBUTtBQUlSLElBQU0sVUFBVSxPQUFPLGVBQWUsZUFBZSxXQUFXO0FBQ2hFLElBQU0sUUFBTyxPQUFPLGVBQWUsZUFBZSxXQUFXOzs7QUUzQ3BFO0FBRUEsSUFBTSxXQUF1QjtBQUFBLEVBQzNCO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUE7QUFBQSxFQUVQO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUE7QUFBQTtBQUlGLElBQU0sY0FBYyxNQUFrQjtBQUMzQyxTQUFPO0FBQUE7OztBVlhGLGtCQUFrQjtBQUN2QixTQUFPO0FBQUE7QUFLTSxpQkFBaUI7QUFDOUIsUUFBTSxDQUFDLFNBQVMsY0FBYyw0QkFBUztBQUV2QywrQkFBVSxNQUFNO0FBQ2QsZUFBVztBQUFBLEtBQ1Y7QUFFSCxRQUFNLFlBQXVCO0FBQzdCLFNBQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsV0FBRDtBQUFBLElBQVMsV0FBVTtBQUFBLEtBQ2hCLFVBQVUsb0NBQUMsdUJBQUQsUUFBYSxNQUN4QixvQ0FBQyxXQUFELE1BQ0Usb0NBQUMsY0FBRCxPQUNBLG9DQUFDLHVCQUFELFFBRUYsb0NBQUMsVUFBRDtBQUFBLElBQVEsV0FBVTtBQUFBLEtBQ2hCLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUE2Qyx3QkFDcEMsSUFBSSxPQUFPO0FBQUE7OztBTDNCM0Msb0JBQWtDO0FBQzNCLElBQU0sUUFBUSxFQUFFLFFBQVE7QUFDeEIsSUFBTSxTQUFTO0FBQUEsRUFDcEIsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVixnQkFBZ0I7QUFBQSxJQUNkLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
