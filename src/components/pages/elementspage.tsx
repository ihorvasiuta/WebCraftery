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
import elementsData from "../ui/elements_list/elementslist.json";
import "./elementspage.css";
import { ElementItem } from "../ui/elements_list/types";

const ElementsPage: React.FC = () => {
  const navigate = useNavigate();
  const { elementId } = useParams<{ elementId?: string }>();
  const [element, setElement] = useState<ElementItem | null>(null);
  const [codeData, setCodeData] = useState<any>(null);
  const [updatedData, setUpdatedData] = useState<ElementItem | null>(null);

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
        setUpdatedData(modifiedElement);
      }
    } else {
      setElement(null);
      setCodeData(null);
      setUpdatedData(null);
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

  const handleSelectItem = (item: ElementItem) => {
    navigate(item.path);
  };

  return (
    <div className="elementspage">
      <div className="exp_group">
        <div className="elements_list">
          <ElementsList onSelect={handleSelectItem} />
        </div>
        <div className="content_side">
          {element ? (
            <>
              <div className="container">
                <div className="content_block">
                  <div className="pr_windows_wrapper">
                    <div className="preview_windows">
                      {updatedData && (
                        <>
                          <RenderPreview codes={updatedData.code} />
                          <RenderPreviewPhone codes={updatedData.code} />
                        </>
                      )}
                    </div>
                  </div>
                  <div className="sources_block">
                    <CodeSnippet codeExamples={codeData} />
                    <DownloadBlock
                      downloadexamples={{
                        projectpath: element.download_path || "",
                        imagespath: element.images_path || "",
                        images: element.images || false,
                      }}
                    />
                  </div>
                  <DownloadWithGitBlock
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
            <p>Select an element from the list to see details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ElementsPage;
