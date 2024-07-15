import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CodeSnippet from "../ui/code_snippet/codesnippet";
import ElementsList from "../ui/elements_list/elementslist";
import DownloadBlock from "../ui/download_block/download_block";
import DetailsBlock from "../ui/element_details_block/detailsblock";
import RenderPreview from "../ui/preview/preview";
import "./elementspage.css";
import RenderPreviewPhone from "../ui/preview/preview_phone";
import elementsData from "../ui/elements_list/elementslist.json";
import { ElementItem } from "../ui/elements_list/types";

const ElementsPage: React.FC = () => {
  const navigate = useNavigate();
  const { elementId } = useParams<{ elementId?: string }>();
  const [element, setElement] = useState<ElementItem | null>(null);

  useEffect(() => {
    if (elementId) {
      const selectedElement = elementsData
        .flatMap((cat) => cat.childrens)
        .find((child) => child.id === elementId);
      setElement(selectedElement || null);
    } else {
      setElement(null);
    }
  }, [elementId]);
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
                      <RenderPreview codes={element.code} />
                      <RenderPreviewPhone codes={element.code} />
                    </div>
                  </div>
                  <div className="sources_block">
                    <CodeSnippet codeExamples={element.code} />
                    <DownloadBlock />
                  </div>
                  <DetailsBlock
                    details_data={{
                      title: element.title,
                      description: element.description,
                      url: element.demo_url,
                    }}
                  />
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
