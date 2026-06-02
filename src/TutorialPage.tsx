import { Link } from "react-router";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import "./TutorialPage.css";

const architectureItems = [
  {
    file: "main.ts",
    role: "Boots React and tags the page with html.isSpatial when WebSpatial is active.",
  },
  {
    file: "Router.tsx",
    role: "Maps the storefront, product detail page, and this tutorial route.",
  },
  {
    file: "products.ts",
    role: "Keeps product metadata, thumbnail paths, and GLB model paths in one data source.",
  },
  {
    file: "ProductCard.tsx",
    role: "Uses Model3D for grid previews and sets spatial depth with CSS variables.",
  },
  {
    file: "ProductPage.tsx",
    role: "Shows the selected product and animates the spatial model through a ModelRef.",
  },
  {
    file: "Model3D.tsx",
    role: "Switches between an image fallback and WebSpatial's XR-enabled Model component.",
  },
  {
    file: "manifest.webmanifest",
    role: "Declares the XR main scene size for spatial launch contexts.",
  },
];

const chapters = [
  {
    time: "0:00",
    title: "The developer mental model",
    narration:
      "We are starting with a normal React and Vite storefront. It has a router, a main storefront page, product detail pages, product data, reusable UI components, and CSS. This is important: WebSpatial starts from the web developers already know.",
    visual: "Project map: React entry point, routes, data, product pages, and the reusable Model3D component.",
    references: ["src/Router.tsx:11", "src/data/products.ts:25"],
  },
  {
    time: "0:45",
    title: "Where WebSpatial fits",
    narration:
      "WebSpatial adds a spatial runtime layer to the website. In a regular browser, the app still behaves like a normal storefront. In a supported spatial runtime, the app can activate spatial-aware UI and XR-enabled elements.",
    visual: "A browser website flows into a WebSpatial runtime and becomes a spatial scene on PICOXR.",
    references: ["src/main.ts:6", "public/manifest.webmanifest:39"],
  },
  {
    time: "1:30",
    title: "Spatializing product media",
    narration:
      "The product preview is where spatialization becomes concrete. The app has a Model3D component. If there is no model, or if the page is running outside Spatial Web, it renders a normal image. If Spatial Web is available, it renders WebSpatial's Model component with enable-xr.",
    visual: "Split-screen comparison: image fallback on the left, XR model on the right.",
    references: ["src/components/Model3D.tsx:21", "src/components/Model3D.tsx:38"],
  },
  {
    time: "2:30",
    title: "Product page as the spatial demo",
    narration:
      "The product detail page uses the same Model3D component. It also animates the model transform when a WebSpatial model ref is available, so a regular React page gains depth and motion in spatial context.",
    visual: "A product detail layout with the model card floating forward and rotating.",
    references: ["src/ProductPage.tsx:13", "src/ProductPage.tsx:25", "src/ProductPage.tsx:80"],
  },
  {
    time: "3:15",
    title: "Manifest and scene setup",
    narration:
      "The manifest tells the spatial platform how to launch the app. This project declares an xr_main_scene with a default size. That gives the platform a spatial entry point while the same site still works as a web app.",
    visual: "A manifest card connected to a spatial window labeled 1200 by 800.",
    references: ["public/manifest.webmanifest:39"],
  },
  {
    time: "4:00",
    title: "Developer workflow with AI tools",
    narration:
      "Because the app is still React, AI tools can help developers reason about the same structure they already use: routes, components, CSS, data, and runtime checks. A developer can ask for a new spatial interaction, and the AI can usually localize the work to a component like Model3D or a page like ProductPage.",
    visual: "Prompt bubble to implementation files: TutorialPage, Model3D, ProductPage, and CSS.",
    references: ["package.json:7", "package.json:9", "package.json:11"],
  },
  {
    time: "4:45",
    title: "Closing takeaway",
    narration:
      "Spatializing a website does not mean throwing away the web. It means adding a spatial runtime, detecting when spatial capabilities are available, and progressively enhancing the parts of the experience that benefit from depth, presence, and 3D interaction.",
    visual: "Three takeaways: keep the web app, detect Spatial runtime, enhance selectively with XR components.",
    references: ["src/components/Model3D.tsx:29", "src/components/Model3D.tsx:38"],
  },
];

const workflowSteps = [
  "Ask AI to inspect the React routes, components, data, and CSS.",
  "Identify the parts of the experience that benefit from 3D or depth.",
  "Add WebSpatial components where they create value, not everywhere.",
  "Keep browser fallbacks so the same site still works on the flat web.",
  "Validate with npm run build and WebSpatial preview tooling.",
];

const modelSnippet = `if (!supportsWebSpatialModel) {
  return <img src={imgSrc} alt={alt} />;
}

return (
  <Model enable-xr ref={ref} {...props}>
    <img src={imgSrc} alt={alt} />
  </Model>
);`;

const runtimeSnippet = `if (Spatial.prototype.runInSpatialWeb()) {
  document.documentElement.classList.add("isSpatial");
}`;

const manifestSnippet = `"xr_main_scene": {
  "default_size": {
    "width": 1200,
    "height": 800
  }
}`;

export default function TutorialPage() {
  return (
    <div className="tutorialPage">
      <header className="tutorialTopbar">
        <Link to="/" className="tutorialLogo" aria-label="Return to storefront">
          Shop Spatial Tutorial
        </Link>
        <nav className="tutorialNav" aria-label="Tutorial navigation">
          <Link to="/">Storefront</Link>
          <Link to="/product/compact-cordless-drill">Product example</Link>
          <a href="#script">Video script</a>
        </nav>
      </header>

      <main className="tutorialMain">
        <section className="tutorialHero" aria-labelledby="tutorial-title">
          <Badge className="tutorialBadge">PICOXR developer tutorial</Badge>
          <h1 id="tutorial-title">How WebSpatial spatializes a website</h1>
          <p>
            A high-level video script and visual walkthrough for developers using AI tools to understand
            where WebSpatial fits in a normal React, Vite, and TypeScript application.
          </p>
          <div className="tutorialHeroActions">
            <Button asChild>
              <a href="#visuals">View visuals</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#script">Read script</a>
            </Button>
          </div>
        </section>

        <section id="visuals" className="tutorialSection" aria-labelledby="visuals-title">
          <div className="tutorialSectionHeader">
            <Badge variant="outline">HTML/CSS visuals</Badge>
            <h2 id="visuals-title">What spatialization means in this project</h2>
            <p>
              Spatialization is progressive enhancement: keep the website, detect spatial capability,
              and upgrade selected surfaces with depth, 3D models, and XR-aware behavior.
            </p>
          </div>

          <div className="spatialFlow tutorialDiagram" aria-label="Spatialization flow diagram">
            <div className="browserFrame">
              <div className="frameChrome">
                <span />
                <span />
                <span />
              </div>
              <div className="browserHero" />
              <div className="browserGrid">
                <span />
                <span />
                <span />
              </div>
              <strong>React/Vite website</strong>
              <p>Routes, product data, normal CSS, image fallbacks.</p>
            </div>

            <div className="flowArrow" aria-hidden="true">→</div>

            <div className="spatialFrame">
              <div className="spatialWindow spatialWindow--back" />
              <div className="spatialWindow spatialWindow--front">
                <span className="spatialObject" />
              </div>
              <strong>Spatial scene on PICOXR</strong>
              <p>Same web app, enhanced runtime, XR-enabled model surfaces.</p>
            </div>
          </div>

          <div className="tutorialGrid tutorialGrid--architecture">
            {architectureItems.map((item) => (
              <Card key={item.file} className="tutorialInfoCard">
                <CardHeader>
                  <CardTitle>{item.file}</CardTitle>
                  <CardDescription>{item.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="tutorialCompare tutorialDiagram" aria-label="Fallback and WebSpatial comparison">
            <article>
              <Badge variant="outline">Normal browser</Badge>
              <h3>Fallback image</h3>
              <div className="fallbackPreview">
                <img src="/models/cordless-drill/thumbnail.png" alt="Compact cordless drill thumbnail" />
              </div>
              <ul>
                <li>Accessible alt text.</li>
                <li>Normal HTML layout.</li>
                <li>Works anywhere the web works.</li>
              </ul>
            </article>
            <article>
              <Badge>Spatial runtime</Badge>
              <h3>XR-enabled model</h3>
              <div className="xrPreview" aria-hidden="true">
                <span className="xrModel" />
                <span className="xrShadow" />
              </div>
              <ul>
                <li>WebSpatial Model with enable-xr.</li>
                <li>Depth controlled through CSS variables.</li>
                <li>Can be animated through ModelRef transforms.</li>
              </ul>
            </article>
          </div>

          <div className="tutorialCodeGrid">
            <Card className="tutorialCodeCard">
              <CardHeader>
                <CardTitle>Runtime flag</CardTitle>
                <CardDescription>Used to adapt styling when Spatial Web is active.</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="codeBlock"><code>{runtimeSnippet}</code></pre>
              </CardContent>
            </Card>
            <Card className="tutorialCodeCard">
              <CardHeader>
                <CardTitle>Progressive model rendering</CardTitle>
                <CardDescription>The key spatialization pattern in this storefront.</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="codeBlock"><code>{modelSnippet}</code></pre>
              </CardContent>
            </Card>
            <Card className="tutorialCodeCard">
              <CardHeader>
                <CardTitle>XR main scene</CardTitle>
                <CardDescription>Manifest metadata used by spatial launch contexts.</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="codeBlock"><code>{manifestSnippet}</code></pre>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        <section className="tutorialSection" aria-labelledby="ai-workflow-title">
          <div className="tutorialSectionHeader">
            <Badge variant="outline">AI-assisted development</Badge>
            <h2 id="ai-workflow-title">How developers should think with AI tools</h2>
            <p>
              WebSpatial fits naturally into AI-assisted web development because the project remains inspectable
              as familiar React components, TypeScript data, CSS, and package scripts.
            </p>
          </div>

          <div className="aiWorkflow tutorialDiagram">
            <div className="promptBubble">“Spatialize this product page, but keep browser fallbacks.”</div>
            <ol>
              {workflowSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </section>

        <section id="script" className="tutorialSection" aria-labelledby="script-title">
          <div className="tutorialSectionHeader">
            <Badge variant="outline">Video script</Badge>
            <h2 id="script-title">Narration and visual cues</h2>
            <p>
              Use these chapter cards as a teleprompter and a shot list for a five-minute high-level walkthrough.
            </p>
          </div>

          <div className="scriptList">
            {chapters.map((chapter) => (
              <Card key={chapter.title} className="scriptCard">
                <CardHeader>
                  <div className="scriptCardMeta">
                    <Badge>{chapter.time}</Badge>
                    <span>{chapter.references.join(" · ")}</span>
                  </div>
                  <CardTitle>{chapter.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="scriptNarration">{chapter.narration}</p>
                  <p className="tutorialCue">Visual: {chapter.visual}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="takeawayStrip" aria-label="Final developer takeaways">
          <article>
            <span>01</span>
            <h3>Keep the web app</h3>
            <p>React routes, data, CSS, and deployment still matter.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Detect Spatial runtime</h3>
            <p>Use WebSpatial capability checks to activate enhanced behavior.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Enhance selectively</h3>
            <p>Upgrade high-value moments with depth, presence, and 3D interaction.</p>
          </article>
        </section>
      </main>
    </div>
  );
}
