"use strict";(self.webpackChunkdocusaurus_ciadocs=self.webpackChunkdocusaurus_ciadocs||[]).push([[6918],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>m});var t=a(7294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=t.createContext({}),u=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=l,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return a?t.createElement(k,o(o({ref:n},c),{},{components:a})):t.createElement(k,o({ref:n},c))}));function m(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7657:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var t=a(7462),l=(a(7294),a(3905));const r={},o="Guia de estilos",i={unversionedId:"cia-funciones/lineamientos-de-desarrollador/guia-de-estilos",id:"cia-funciones/lineamientos-de-desarrollador/guia-de-estilos",title:"Guia de estilos",description:"Esta es la gu\xeda de estilos que debemos seguir en los desarrollos de los servicios con Go, tiene como base la gu\xeda de estilos de Uber.",source:"@site/docs/cia-funciones/lineamientos-de-desarrollador/guia-de-estilos.md",sourceDirName:"cia-funciones/lineamientos-de-desarrollador",slug:"/cia-funciones/lineamientos-de-desarrollador/guia-de-estilos",permalink:"/docusaurus-ciadocs/docs/cia-funciones/lineamientos-de-desarrollador/guia-de-estilos",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cia-funciones/lineamientos-de-desarrollador/guia-de-estilos.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lineamientos de Desarrollador - GO",permalink:"/docusaurus-ciadocs/docs/category/lineamientos-de-desarrollador---go"},next:{title:"Stock API v1.0.0",permalink:"/docusaurus-ciadocs/docs/cia-funciones/lineamientos-de-desarrollador/template-ejemplo"}},s={},u=[{value:"\xcdndice",id:"\xedndice",level:2},{value:"Introducci\xf3n",id:"introducci\xf3n",level:2},{value:"Directrices",id:"directrices",level:2},{value:"Defer para limpiar",id:"defer-para-limpiar",level:3},{value:"Especificar una capacidad aproximada al Map",id:"especificar-una-capacidad-aproximada-al-map",level:3},{value:"Estilo",id:"estilo",level:2},{value:"Se consistente",id:"se-consistente",level:3},{value:"Agrupar declaraciones similares",id:"agrupar-declaraciones-similares",level:3},{value:"Agrupaciones y orden en los imports",id:"agrupaciones-y-orden-en-los-imports",level:3},{value:"Nombre de paquetes",id:"nombre-de-paquetes",level:3},{value:"Alias en los imports",id:"alias-en-los-imports",level:3},{value:"Agrupaci\xf3n de funciones y orden",id:"agrupaci\xf3n-de-funciones-y-orden",level:3},{value:"Reducir el c\xf3digo anidado",id:"reducir-el-c\xf3digo-anidado",level:3},{value:"Else innecesario",id:"else-innecesario",level:3},{value:"Prefijo _ para las globales privadas",id:"prefijo-_-para-las-globales-privadas",level:3},{value:"Composici\xf3n en Structs",id:"composici\xf3n-en-structs",level:3},{value:"Usa el nombre de los campos al inicializar Structs",id:"usa-el-nombre-de-los-campos-al-inicializar-structs",level:3},{value:"Declaraci\xf3n de variables locales",id:"declaraci\xf3n-de-variables-locales",level:3},{value:"nil es un slice v\xe1lido",id:"nil-es-un-slice-v\xe1lido",level:3},{value:"Reducir el scope de las variables",id:"reducir-el-scope-de-las-variables",level:3}],c={toc:u};function d(e){let{components:n,...a}=e;return(0,l.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"guia-de-estilos"},"Guia de estilos"),(0,l.kt)("p",null,"Esta es la gu\xeda de estilos que debemos seguir en los desarrollos de los servicios con Go, tiene como base la gu\xeda de estilos de ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/uber-go/guide"},"Uber"),"."),(0,l.kt)("h2",{id:"\xedndice"},"\xcdndice"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#introduccin"},"Introducci\xf3n")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#directrices"},"Directrices"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#defer-para-limpiar"},"Defer para limpiar")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#especificar-una-capacidad-aproximada-al-map"},"Especificar una capacidad aproximada al Map")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#estilo"},"Estilo"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#se-consistente"},"Se consistente")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#agrupar-declaraciones-similares"},"Agrupar declaraciones similares")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#agrupaciones-y-orden-en-los-imports"},"Agrupaciones y orden en los imports")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#nombre-de-paquetes"},"Nombre de paquetes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#nombres-de-funciones"},"Nombres de funciones")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#alias-en-los-imports"},"Alias en los imports")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#agrupacin-de-funciones-y-orden"},"Agrupaci\xf3n de funciones y orden")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#reducir-el-cdigo-anidado"},"Reducir el c\xf3digo anidado")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#else-innecesario"},"Else innecesario")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#prefijo-_-para-las-globales-privadas"},"Prefijo _ para las globales privadas")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#composicin-en-structs"},"Composici\xf3n en Structs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#usa-el-nombre-de-los-campos-al-inicializar-structs"},"Usa el nombre de los campos al inicializar Structs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#declaracin-de-variables-globales"},"Declaraci\xf3n de variables locales")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#nil-es-un-slice-vlido"},"nil es un slice v\xe1lido")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#reducir-el-scope-de-las-variables"},"Reducir el scope de las variables"))))),(0,l.kt)("h2",{id:"introducci\xf3n"},"Introducci\xf3n"),(0,l.kt)("p",null,"Los estilos son las convenciones que gobiernan nuestro c\xf3digo. El t\xe9rmino estilo aqu\xed es un poco inapropiado, ya que estas convenciones cubren algo m\xe1s que el formato de nuestros ficheros, del cual ya se encarga sobradamente ",(0,l.kt)("inlineCode",{parentName:"p"},"gofmt"),"."),(0,l.kt)("p",null,"La finalidad de esta gu\xeda es la de tratar de describir en detalle como se escribe c\xf3digo Go en Alicorp. Estas reglas han sido creadas para mantener un c\xf3digo manejable, haciendo que los desarrolladores puedan realizar nuevas tareas o funcionalidades de manera m\xe1s productiva."),(0,l.kt)("p",null,"Este documento cubre las convenciones idiom\xe1ticas en Go que se siguen en Alicorp. Muchas de estas son pautas generales para Go, mientras que otras se extienden a recursos externos:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://golang.org/doc/effective_go.html"},"Effective Go")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/golang/go/wiki/CodeReviewComments"},"The Go common mistakes guide"))),(0,l.kt)("p",null,"Todo el c\xf3digo debe estar libre de errores cuando se ejecute tanto ",(0,l.kt)("inlineCode",{parentName:"p"},"golangci-linter")," ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/golangci/golangci-lint"},"Golangci-linter")," como ",(0,l.kt)("inlineCode",{parentName:"p"},"go vet"),". Recomendamos configurar tu editor para ejecutar:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"goimports")," al guardar"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"golangci-linter run")," y ",(0,l.kt)("inlineCode",{parentName:"li"},"go vet")," para comprobar errores.")),(0,l.kt)("p",null,"Puedes encontrar m\xe1s informaci\xf3n, en la secci\xf3n de soporte de editores aqu\xed: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/golang/go/wiki/IDEsAndTextEditorPlugins"},"https://github.com/golang/go/wiki/IDEsAndTextEditorPlugins")),(0,l.kt)("h2",{id:"directrices"},"Directrices"),(0,l.kt)("h3",{id:"defer-para-limpiar"},"Defer para limpiar"),(0,l.kt)("p",null,"Utiliza ",(0,l.kt)("inlineCode",{parentName:"p"},"defer")," para limpiar y cerrar recursos como ficheros y ",(0,l.kt)("inlineCode",{parentName:"p"},"locks"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Incorrecto"),(0,l.kt)("th",null,"Correcto"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"p.Lock()\nif p.count < 10 {\n  p.Unlock()\n  return p.count\n}\n\np.count++\nnewCount := p.count\np.Unlock()\n\nreturn newCount\n\n// es sencillo olvidar realizar unlocks cuando tienes m\xfaltiples returns\n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"p.Lock()\ndefer p.Unlock()\n\nif p.count < 10 {\n  return p.count\n}\n\np.count++\nreturn p.count\n\n// m\xe1s legible\n")))))),(0,l.kt)("p",null,"El sobrecoste que tiene ",(0,l.kt)("inlineCode",{parentName:"p"},"defer")," es extremadamente peque\xf1o y s\xf3lo debe evitarse si puedes\nasegurar que el tiempo de ejecuci\xf3n de tu funci\xf3n es de nanosegundos. Se gana mucho m\xe1s con la legibilidad obtenida usando ",(0,l.kt)("inlineCode",{parentName:"p"},"defer")," que el min\xfasculo coste que tiene usarlos. Esto se puede observar claramente en m\xe9todos largos que tienen m\xe1s que simples accesos a memoria, d\xf3nde los otros c\xe1lculos son mucho m\xe1s significantes que el ",(0,l.kt)("inlineCode",{parentName:"p"},"defer"),"."),(0,l.kt)("h3",{id:"especificar-una-capacidad-aproximada-al-map"},"Especificar una capacidad aproximada al Map"),(0,l.kt)("p",null,"Cuando sea posible, inicializacermos el ",(0,l.kt)("inlineCode",{parentName:"p"},"map")," indicando una capacidad aproximada, utilizando la funci\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"make()"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"make(map[T1]T2, hint)\n")),(0,l.kt)("p",null,"Intenta siempre que puedas, proporcionar una capacidad aproximada utilizando ",(0,l.kt)("inlineCode",{parentName:"p"},"make()"),",\najustando su tama\xf1o a la hora de ser inicializado, esto reduce la necesidad de aumentar\nel tama\xf1o y las asignaciones del ",(0,l.kt)("inlineCode",{parentName:"p"},"map")," a medida que se vayan agregando nuevos elementos.\nTen en cuenta que la capacidad aproximada no impedir\xe1 en ning\xfan caso que se puedan asignar\nelementos de m\xe1s aunque \xe9sta haya sido proporcionada."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Incorrecto"),(0,l.kt)("th",null,"Correcto"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'m := make(map[string]os.FileInfo)\n\nfiles, _ := ioutil.ReadDir("./files")\nfor _, f := range files {\n    m[f.Name()] = f\n}\n'))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'\nfiles, _ := ioutil.ReadDir("./files")\n\nm := make(map[string]os.FileInfo, len(files))\nfor _, f := range files {\n    m[f.Name()] = f\n}\n')))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"m")," es creado sin asignar una capacidad previa;\nesto provocar\xe1 m\xe1s asignaciones en el momento de a\xf1adir nuevos elementos.")),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"m")," es creado utilizando una capacidad previa; habr\xe1 menos asignaciones en el momento de a\xf1adir\nnuevos elementos."))))),(0,l.kt)("h2",{id:"estilo"},"Estilo"),(0,l.kt)("h3",{id:"se-consistente"},"Se consistente"),(0,l.kt)("p",null,"Alguna de las directrices recogidas en este documente pueden ser tratadas de manera objetiva; sin embargo otras son\nsituacionales, contextuales o subjetivas."),(0,l.kt)("p",null,"Por encima de todo, ",(0,l.kt)("strong",{parentName:"p"},"se consistente"),"."),(0,l.kt)("p",null,"El c\xf3digo consistente es sencillo de mantener, sencillo de comprender,\nrequiere menos esfuerzo cognitivo y es m\xe1s sencillo de migrar o actualizar si aparecen nuevas\nconvenciones o funcionalidades o bugs que solucionar."),(0,l.kt)("p",null,"Por el contrario, tener estilos dispares o conflictivos entre si en un solo repositorio de c\xf3digo, causar\xe1 sin duda\nalguna un sobrecoste de mantenimiento, que afectar\xe1 de manera significativa a la velocidad, code reviews y creaci\xf3n de\nnuevas funcionalidades y correcci\xf3n de errores."),(0,l.kt)("p",null,"Cuando apliques estas directrices en tu c\xf3digo, es recomendable que los cambios sean hechos a nivel de paquete\n(o en todo el c\xf3digo), de otro modo la aplicaci\xf3n a nivel de sub paquetes violar\xe1 la preocupaci\xf3n anterior al\nintroducir m\xfaltiples estilos en el mismo c\xf3digo."),(0,l.kt)("h3",{id:"agrupar-declaraciones-similares"},"Agrupar declaraciones similares"),(0,l.kt)("p",null,"Go soporta la agrupaci\xf3n de declaraciones similares."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Incorrecto"),(0,l.kt)("th",null,"Correcto"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import "a"\nimport "b"\n'))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "a"\n  "b"\n)\n')))))),(0,l.kt)("p",null,"Esto tambi\xe9n aplica a variables, constantes y declaraciones de tipo."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Incorrecto"),(0,l.kt)("th",null,"Correcto"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"\nconst a = 1\nconst b = 2\n\n\n\nvar a = 1\nvar b = 2\n\n\n\ntype Area float64\ntype Volume float64\n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"const (\n  a = 1\n  b = 2\n)\n\nvar (\n  a = 1\n  b = 2\n)\n\ntype (\n  Area float64\n  Volume float64\n)\n")))))),(0,l.kt)("p",null,"S\xf3lo agruparemos aquellas declaraciones que est\xe9n estrechamente cohesionadas."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Incorrecto"),(0,l.kt)("th",null,"Correcto"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'type Operation int\n\nconst (\n  Add Operation = iota + 1\n  Subtract\n  Multiply\n  ENV_VAR = "MY_ENV"\n)\n'))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'type Operation int\n\nconst (\n  Add Operation = iota + 1\n  Subtract\n  Multiply\n)\n\nconst ENV_VAR = "MY_ENV"\n')))))),(0,l.kt)("p",null,"Las agrupaciones no tienen limitaciones en cuanto a donde pueden ser usadas. Podemos utilizarlas incluso dentro de una funci\xf3n."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Incorrecto"),(0,l.kt)("th",null,"Correcto"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func f() string {\n  var red = color.New(0xff0000)\n  var green = color.New(0x00ff00)\n  var blue = color.New(0x0000ff)\n\n  ...\n}\n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func f() string {\n  var (\n    red   = color.New(0xff0000)\n    green = color.New(0x00ff00)\n    blue  = color.New(0x0000ff)\n  )\n\n  ...\n}\n")))))),(0,l.kt)("h3",{id:"agrupaciones-y-orden-en-los-imports"},"Agrupaciones y orden en los imports"),(0,l.kt)("p",null,"Deber\xeda haber siempre solo tres grupos de ",(0,l.kt)("inlineCode",{parentName:"p"},"imports"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Paquete est\xe1ndar"),(0,l.kt)("li",{parentName:"ul"},"Paquetes de terceros"),(0,l.kt)("li",{parentName:"ul"},"Codigo propio")),(0,l.kt)("p",null,"Esta es la forma que aplica ",(0,l.kt)("inlineCode",{parentName:"p"},"goimports")," por defecto."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Incorrecto"),(0,l.kt)("th",null,"Correcto"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "errors"\n        "dev.azure.com/alicorp/materials/domain/itemproducthierarchy"\n    "github.com/gin-gonic/gin"\n    "github.com/jackc/pgx/v4"\n    "dev.azure.com/alicorp/materials/model"\n)\n'))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import (\n        "fmt"\n    "errors"\n\n    "github.com/gin-gonic/gin"\n    "github.com/jackc/pgx/v4"\n\n    "dev.azure.com/alicorp/materials/domain/itemproducthierarchy"\n    "dev.azure.com/alicorp/materials/infrastructure/handler/request"\n    "dev.azure.com/alicorp/materials/model"\n)\n')))))),(0,l.kt)("h3",{id:"nombre-de-paquetes"},"Nombre de paquetes"),(0,l.kt)("p",null,"Cuando nombramos un paquete, debemos seguir las siguientes normas:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ser\xe1 completamente en min\xfascula. No habr\xe1 ninguna may\xfascula para separar palabras ni guiones bajo."),(0,l.kt)("li",{parentName:"ul"},"No deber\xeda de necesitar el uso de alias cuando sea importado."),(0,l.kt)("li",{parentName:"ul"},"Debe ser corto y conciso. Recuerda que ese nombre ser\xe1 el identificador del paquete en cada llamada."),(0,l.kt)("li",{parentName:"ul"},"No usar pluares. Por ejemplo, ",(0,l.kt)("inlineCode",{parentName:"li"},"net\\url"),", no ",(0,l.kt)("inlineCode",{parentName:"li"},"net\\urls"),"."),(0,l.kt)("li",{parentName:"ul"},"No utilizar nombres de paquetes como, ",(0,l.kt)("inlineCode",{parentName:"li"},"common"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"util"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"shared"),", o ",(0,l.kt)("inlineCode",{parentName:"li"},"lib"),". Son nombres malos y que no dicen nada.")),(0,l.kt)("p",null,"Ver tambi\xe9n ",(0,l.kt)("a",{parentName:"p",href:"https://blog.golang.org/package-names"},"Package Names")," y ",(0,l.kt)("a",{parentName:"p",href:"https://rakyll.org/style-packages/"},"Style guideline for Go packages"),"."),(0,l.kt)("h3",{id:"alias-en-los-imports"},"Alias en los imports"),(0,l.kt)("p",null,"Los alias para los imports s\xf3lo deben ser usados si el nombre no coincide con el \xfaltimo elemento de la ruta importada."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "net/http"\n\n  client "example.com/client-go"\n  trace "example.com/trace/v2"\n)\n')),(0,l.kt)("p",null,"En todos los dem\xe1s escenarios, los alias para los imports deben ser evitados a no ser que haya un conflicto directo entre los paquetes."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Incorrecto"),(0,l.kt)("th",null,"Correcto"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "fmt"\n  "os"\n\n\n  nettrace "golang.net/x/trace"\n)\n'))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "fmt"\n  "os"\n  "runtime/trace"\n\n  nettrace "golang.net/x/trace"\n)\n')))))),(0,l.kt)("h3",{id:"agrupaci\xf3n-de-funciones-y-orden"},"Agrupaci\xf3n de funciones y orden"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Las funciones deben agruparse por proximidad de llamada."),(0,l.kt)("li",{parentName:"ul"},"Las funciones de un fichero deben agruparse por su receptor.")),(0,l.kt)("p",null,"Por lo tanto, las funciones p\xfablicas aparecer\xe1n al principio del fichero, despu\xe9s de las definiciones de\nTherefore, exported functions should appear first in a file, after\n",(0,l.kt)("inlineCode",{parentName:"p"},"struct"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"const"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"var"),"."),(0,l.kt)("p",null,"El constructor ",(0,l.kt)("inlineCode",{parentName:"p"},"newXYZ()"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"NewXYZ()")," debe aparecer despu\xe9s de que el tipo sea definido, pero antes del resto de m\xe9todos del receptor."),(0,l.kt)("p",null,"Como las funciones est\xe1n agrupadas por receptor, las funciones de tipo ",(0,l.kt)("em",{parentName:"p"},"helper")," deber\xedan aparecer al final del fichero."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Incorrecto"),(0,l.kt)("th",null,"Correcto"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func (s *something) Cost() {\n  return calcCost(s.weights)\n}\n\ntype something struct{ ... }\n\nfunc calcCost(n []int) int {...}\n\nfunc (s *something) Stop() {...}\n\nfunc newSomething() *something {\n    return &something{}\n}\n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"type something struct{ ... }\n\nfunc newSomething() *something {\n    return &something{}\n}\n\nfunc (s *something) Cost() {\n  return calcCost(s.weights)\n}\n\nfunc (s *something) Stop() {...}\n\nfunc calcCost(n []int) int {...}\n")))))),(0,l.kt)("h3",{id:"reducir-el-c\xf3digo-anidado"},"Reducir el c\xf3digo anidado"),(0,l.kt)("p",null,"Tenemos que tener un c\xf3digo con poca anidaci\xf3n, donde pondremos el control de errores y condiciones de validaci\xf3n al principio provocando un return temprano o continuar un bucle. Reduciendo el n\xfamero de c\xf3digo anidado a varios niveles."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Incorrecto"),(0,l.kt)("th",null,"Correcto"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'for _, v := range data {\n  if v.F1 == 1 {\n    v = process(v)\n    if err := v.Call(); err == nil {\n      v.Send()\n    } else {\n      return err\n    }\n  } else {\n    log.Printf("Invalid v: %v", v)\n  }\n}\n'))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'for _, v := range data {\n  if v.F1 != 1 {\n    log.Printf("Invalid v: %v", v)\n    continue\n  }\n\n  v = process(v)\n  if err := v.Call(); err != nil {\n    return err\n  }\n  v.Send()\n}\n')))))),(0,l.kt)("h3",{id:"else-innecesario"},"Else innecesario"),(0,l.kt)("p",null,"Si una variable es asignada tanto en el ",(0,l.kt)("inlineCode",{parentName:"p"},"if")," como en el ",(0,l.kt)("inlineCode",{parentName:"p"},"else"),", esto podr\xe1 ser remplazado por un \xfanico ",(0,l.kt)("inlineCode",{parentName:"p"},"if"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Incorrecto"),(0,l.kt)("th",null,"Correcto"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"var a int\nif b {\n  a = 100\n} else {\n  a = 10\n}\n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"a := 10\nif b {\n  a = 100\n}\n")))))),(0,l.kt)("h3",{id:"prefijo-_-para-las-globales-privadas"},"Prefijo _ para las globales privadas"),(0,l.kt)("p",null,"Todas las variables, ",(0,l.kt)("inlineCode",{parentName:"p"},"var")," y constantes, ",(0,l.kt)("inlineCode",{parentName:"p"},"const")," globales ir\xe1n acompa\xf1adas del prefijo ",(0,l.kt)("inlineCode",{parentName:"p"},"_")," para clarificar cuando se usan que son globales."),(0,l.kt)("p",null,"Excepci\xf3n: los errores privados, deben ir acompa\xf1ados del prefijo ",(0,l.kt)("inlineCode",{parentName:"p"},"err"),"."),(0,l.kt)("p",null,"Justificaci\xf3n: Las variables y constantes globales tienen el scope del paquete. Usando un nombre muy gen\xe9rico se pueden provocar accidentes muy f\xe1cilmente."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Incorrecto"),(0,l.kt)("th",null,"Correcto"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// foo.go\n\nconst (\n  defaultPort = 8080\n  defaultUser = "user"\n)\n\n// bar.go\n\nfunc Bar() {\n  defaultPort := 9090\n  ...\n  fmt.Println("Default port", defaultPort)\n\n  // No veremos error de compilaci\xf3n si la primera l\xednea de \n  // Bar() es borrada.\n}\n'))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// foo.go\n\nconst (\n  _defaultPort = 8080\n  _defaultUser = "user"\n)\n')))))),(0,l.kt)("h3",{id:"composici\xf3n-en-structs"},"Composici\xf3n en Structs"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Embedded types")," (como los mutexs) deben estar al principio de la lista del ",(0,l.kt)("inlineCode",{parentName:"p"},"struct"),", y deben a\xf1adir un salto de l\xednea para separarlos de los campos regulares del ",(0,l.kt)("inlineCode",{parentName:"p"},"struct"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Incorrecto"),(0,l.kt)("th",null,"Correcto"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"type Client struct {\n  version int\n  http.Client\n}\n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"type Client struct {\n  http.Client\n\n  version int\n}\n")))))),(0,l.kt)("h3",{id:"usa-el-nombre-de-los-campos-al-inicializar-structs"},"Usa el nombre de los campos al inicializar Structs"),(0,l.kt)("p",null,"Debes especificar los campos del ",(0,l.kt)("inlineCode",{parentName:"p"},"struct")," cuando vayas a inicializarlo. Adem\xe1s esto es ahora de cumplimiento obligatorio utilizando ",(0,l.kt)("a",{parentName:"p",href:"https://golang.org/cmd/vet/"},(0,l.kt)("inlineCode",{parentName:"a"},"go vet")),"."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Incorrecto"),(0,l.kt)("th",null,"Correcto"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'k := User{"John", "Doe", true}\n'))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'k := User{\n    FirstName: "John",\n    LastName: "Doe",\n    Admin: true,\n}\n')))))),(0,l.kt)("p",null,"Excepci\xf3n: Puedes omitir inicializar un ",(0,l.kt)("inlineCode",{parentName:"p"},"struct")," con el nombre de sus campos en los ",(0,l.kt)("em",{parentName:"p"},"test tables")," cuando tengan 3 o menos campos."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'tests := []struct{\n  op Operation\n  want string\n}{\n  {Add, "add"},\n  {Subtract, "subtract"},\n}\n')),(0,l.kt)("h3",{id:"declaraci\xf3n-de-variables-locales"},"Declaraci\xf3n de variables locales"),(0,l.kt)("p",null,"La forma corta de declaraci\xf3n de variables (",(0,l.kt)("inlineCode",{parentName:"p"},":="),") debe ser usada si una variable se le va a asignar un valor expl\xedcito."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Incorrecto"),(0,l.kt)("th",null,"Correcto"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'var s = "foo"\n'))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'s := "foo"\n')))))),(0,l.kt)("p",null,"Sin embargo, hay algunos casos donde el valor por defecto queda m\xe1s claro utilizando ",(0,l.kt)("inlineCode",{parentName:"p"},"var"),". ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/golang/go/wiki/CodeReviewComments#declaring-empty-slices"},"Declarando Slices vac\xedos"),", por ejemplo."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Incorrecto"),(0,l.kt)("th",null,"Correcto"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func f(list []int) {\n  filtered := []int{}\n  for _, v := range list {\n    if v > 10 {\n      filtered = append(filtered, v)\n    }\n  }\n}\n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func f(list []int) {\n  var filtered []int\n  for _, v := range list {\n    if v > 10 {\n      filtered = append(filtered, v)\n    }\n  }\n}\n")))))),(0,l.kt)("h3",{id:"nil-es-un-slice-v\xe1lido"},"nil es un slice v\xe1lido"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"nil")," es un ",(0,l.kt)("inlineCode",{parentName:"p"},"slice")," v\xe1lido de tama\xf1o 0. Eso quiere decir que,"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"No debes devolver un ",(0,l.kt)("inlineCode",{parentName:"p"},"slice")," de tama\xf1o 0 expl\xedcitamente. Devuelve ",(0,l.kt)("inlineCode",{parentName:"p"},"nil")," en su lugar."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Incorrecto"),(0,l.kt)("th",null,"Correcto"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-go"},'if x == "" {\n  return []int{}\n}\n'))),(0,l.kt)("td",null,(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-go"},'if x == "" {\n  return nil\n}\n'))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Para comprobar si un ",(0,l.kt)("inlineCode",{parentName:"p"},"slice")," est\xe1 vac\xedo, siempre usaremos ",(0,l.kt)("inlineCode",{parentName:"p"},"len(s) == 0"),". No comprobaremos si es ",(0,l.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Incorrecto"),(0,l.kt)("th",null,"Correcto"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func isEmpty(s []string) bool {\n  return s == nil\n}\n"))),(0,l.kt)("td",null,(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func isEmpty(s []string) bool {\n  return len(s) == 0\n}\n"))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Cuando declaramos un slice con ",(0,l.kt)("inlineCode",{parentName:"p"},"var"),", es decir declararlo a su valor inicial, \xe9ste es usable inmediatamente sin necesidad de ",(0,l.kt)("inlineCode",{parentName:"p"},"make()"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Incorrecto"),(0,l.kt)("th",null,"Correcto"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-go"},"nums := []int{}\n// or, nums := make([]int)\n\nif add1 {\n  nums = append(nums, 1)\n}\n\nif add2 {\n  nums = append(nums, 2)\n}\n"))),(0,l.kt)("td",null,(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-go"},"var nums []int\n\nif add1 {\n  nums = append(nums, 1)\n}\n\nif add2 {\n  nums = append(nums, 2)\n}\n")))))))),(0,l.kt)("h3",{id:"reducir-el-scope-de-las-variables"},"Reducir el scope de las variables"),(0,l.kt)("p",null,"Cuando sea posible, reducir el scope de las variables. No hay que reducir el scope si entramos en conflicto con la regla ",(0,l.kt)("a",{parentName:"p",href:"#reducir-el-cdigo-anidado"},"Reducir el c\xf3digo anidado"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Incorrecto"),(0,l.kt)("th",null,"Correcto"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"err := ioutil.WriteFile(name, data, 0644)\nif err != nil {\n return err\n}\n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"if err := ioutil.WriteFile(name, data, 0644); err != nil {\n return err\n}\n")))))),(0,l.kt)("p",null,"Si necesitas un resultado de una funci\xf3n fuera del ",(0,l.kt)("inlineCode",{parentName:"p"},"if"),", entonces no debes de intentar reducir el scope."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Incorrecto"),(0,l.kt)("th",null,"Correcto"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"if data, err := ioutil.ReadFile(name); err == nil {\n  err = cfg.Decode(data)\n  if err != nil {\n    return err\n  }\n\n  fmt.Println(cfg)\n  return nil\n} else {\n  return err\n}\n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"data, err := ioutil.ReadFile(name)\nif err != nil {\n   return err\n}\n\nif err := cfg.Decode(data); err != nil {\n  return err\n}\n\nfmt.Println(cfg)\nreturn nil\n")))))))}d.isMDXComponent=!0}}]);