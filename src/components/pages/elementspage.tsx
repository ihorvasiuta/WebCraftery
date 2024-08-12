import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CodeSnippet from "../ui/code_snippet/codesnippet";
import ElementsList from "../ui/elements_list/elementslist";
import DownloadBlock from "../ui/download_block/download_block";
import DownloadWithGitBlock from "../ui/download_withgit/downloadwgit_block";
import DetailsBlock from "../ui/element_details_block/detailsblock";
import RenderPreview from "../ui/preview/preview";
import QuickGuideBlock from "../ui/quickguide_block/quickguide";
import RenderPreviewPhone from "../ui/preview/preview_phone";
import snippetCodeData from "../ui/code_snippet/elementscode.json";
import ProcentageComp from "../ui/procentage/procentage";
import elementsData from "../ui/elements_list/elementslist.json";
import "./elementspage.css";
import { ElementItem } from "../ui/elements_list/types";

const ElementsPage: React.FC = () => {
  const navigate = useNavigate();
  const { elementId } = useParams<{ elementId?: string }>();
  const [element, setElement] = useState<ElementItem | null>(null);
  const [codeData, setCodeData] = useState<any>(null);
  const [updatedElement, setUpdatedElement] = useState<ElementItem | null>(
    null
  );

  useEffect(() => {
    if (elementId) {
      const selectedElement =
        elementsData
          .flatMap((cat) => cat.childrens)
          .find((child) => child.id === elementId) || null;
      setElement(selectedElement);

      const selectedCode = snippetCodeData.find(
        (item) => item.id === elementId
      );
      setCodeData(selectedCode?.code || null);

      if (selectedElement) {
        const publicUrl = process.env.PUBLIC_URL || "";
        const modifiedElement = addPrefixToImgSrc(selectedElement, publicUrl);
        const modifiedDownPath = addPrefixToDownSrc(modifiedElement, publicUrl);
        setUpdatedElement(modifiedDownPath);
      }
      window.scrollTo(0, 0);
    } else {
      setElement(null);
      setCodeData(null);
      setUpdatedElement(null);
    }
  }, [elementId]);

  const addPrefixToImgSrc = (
    element: ElementItem,
    prefix: string
  ): ElementItem => {
    const updatedElement = { ...element };
    const parser = new DOMParser();
    const doc = parser.parseFromString(updatedElement.code.html, "text/html");
    const imgTags = doc.querySelectorAll("img");

    imgTags.forEach((img) => {
      const src = img.getAttribute("src");
      if (src && !/^https?:\/\//i.test(src)) {
        const newSrc = src.includes("?v=")
          ? src
          : `${prefix}${src}?v=${Date.now()}`;
        img.setAttribute("src", newSrc);
      }
    });
    updatedElement.code.html = new XMLSerializer().serializeToString(doc);
    return updatedElement;
  };
  const addPrefixToDownSrc = (
    element: ElementItem,
    prefix: string
  ): ElementItem => {
    const updatedElement = { ...element };
    if (updatedElement.download_path) {
      updatedElement.download_path = `${prefix}${updatedElement.download_path}`;
    }
    if (updatedElement.images_path) {
      updatedElement.images_path = `${prefix}${updatedElement.images_path}`;
    }
    return updatedElement;
  };

  const handleSelectItem = (item: ElementItem) => {
    navigate(`/elements/${item.id}`);
  };

  return (
    <div className="elementspage">
      <div className="exp_group">
        <div className="elements_list">
          <ElementsList
            onSelect={handleSelectItem}
            activeId={elementId || null}
          />
        </div>
        <div className="content_side">
          {element ? (
            <>
              <div className="container">
                <div className="content_block">
                  <div className="pr_windows_wrapper">
                    <div className="ttl_desc">
                      <div className="ttl_of_el">{element.title}</div>
                      <div className="shrt_desc_of_el">
                        {element.description}
                      </div>
                    </div>
                    <div className="preview_windows">
                      {updatedElement && (
                        <>
                          <RenderPreview codes={updatedElement.code} />
                          <div className="sml_device_phone_text">
                            <RenderPreviewPhone codes={updatedElement.code} />
                            <div className="ttl_desc_smalldevices">
                              <div className="ttl_of_el">{element.title}</div>
                              <div className="shrt_desc_of_el">
                                {element.description}
                              </div>
                              <ProcentageComp
                                code={{
                                  html: element.code.html,
                                  css: element.code.css,
                                  js: element.code.js,
                                }}
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="sources_block">
                    <CodeSnippet codeExamples={codeData} />
                    <DownloadBlock
                      downloadexamples={{
                        projectpath: updatedElement?.download_path || "",
                        imagespath: updatedElement?.images_path || "",
                        images: element.images || false,
                      }}
                    />
                  </div>
                  <DownloadWithGitBlock
                    project_title={element.fullname}
                    clone_url={element.clone_url || ""}
                    visit_url={element.visit_url || ""}
                  />
                  <DetailsBlock
                    details_data={{
                      title: element.title,
                      description: element.description,
                      url: element.demo_url,
                      code: {
                        html: element.code.html,
                        css: element.code.css,
                        js: element.code.js,
                      },
                      important: element.important,
                    }}
                  />
                  <QuickGuideBlock />
                </div>
              </div>
            </>
          ) : (
            <div className="select">
              <div className="container">
                <div className="elements_info">
                  <h1 className="elementsinfo_title">
                    Getting Started with Webcraftery Web Components
                  </h1>
                  <p className="elements_description">
                    Welcome to Webcraftery Elements! Our library includes a wide
                    array of essential web components such as navigation menus,
                    footers, and carousel sliders. These components are
                    adaptable and stylish, designed to integrate smoothly into
                    any web project.
                  </p>
                  <h2 className="steps_title_el">
                    How to Start Using Web Components:
                  </h2>
                  <ol className="steps_list_el">
                    <li>
                      <strong>Explore the Components:</strong> Browse our list
                      of elements to view detailed previews on various devices.
                      This helps you choose the most suitable components for
                      your website.
                    </li>
                    <li>
                      <strong>Download or Clone:</strong> Each element can be
                      downloaded individually as a zipped file or cloned via
                      GitHub. While both options are available, we recommend
                      cloning directly from our GitHub repository. This ensures
                      that you always have the latest updates and features for
                      each component, keeping your project up-to-date with the
                      newest advancements in web development.
                    </li>
                    <li>
                      <strong>
                        <a
                          className="link_to_builder"
                          target="_blank"
                          rel="noreferrer"
                          href="/builder"
                        >
                          Use Webcraftery Builder:
                        </a>
                      </strong>{" "}
                      Utilize the Webcraftery Builder to clone the entire
                      repository of components. This tool not only provides
                      access to all updates but also simplifies the integration
                      process into your existing projects.
                    </li>
                    <li>
                      <strong>Integrate and Customize:</strong> After
                      downloading, integrate the components into your project
                      and customize them according to your specific design and
                      functionality needs.
                    </li>
                  </ol>
                </div>
                <QuickGuideBlock />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ElementsPage;
