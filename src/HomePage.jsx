import ReactPlayer from "react-player";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import React, { useState } from "react";
import { DragSizing } from "react-drag-sizing";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1020/1000/600/",
    thumbnail: "https://picsum.photos/id/1020/250/150/",
  },
  {
    original: "https://picsum.photos/id/1021/1000/600/",
    thumbnail: "https://picsum.photos/id/1021/250/150/",
  },
];

export function HomePage() {
  const [editorContent, setEditorContent] = useState("This is the editor");
  const [memberList, setMemberList] = useState(["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace"]);

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <h1>Enhanced React Components Demo</h1>
      <div className="chat-container" style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <div className="chat-top" style={{ height: "10%", background: "#ddd" }}>
          <h2>Chat Header</h2>
        </div>
        <div className="chat-body" style={{ display: "flex", flexGrow: 1 }}>
          <div className="chat-left" style={{ flex: 1, borderRight: "1px solid #ccc" }}>
            <h3>Message List</h3>
            <div style={{ flexGrow: 1, padding: "10px", overflow: "auto", height: isExpanded ? "400px" : "200px" }}>
              <ul>
                {memberList.map((message, index) => (
                  <li key={index}>{message}: Hello!</li>
                ))}
              </ul>
            </div>
            <button onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "Collapse Messages" : "Expand Messages"}
            </button>
            <DragSizing border="top" handlerStyle={{ backgroundColor: "#ccc", height: "5px", cursor: "ns-resize" }}>
              <textarea
                style={{ width: "100%", height: "100px" }}
                value={editorContent}
                onChange={(e) => setEditorContent(e.target.value)}
              />
            </DragSizing>
          </div>
          <div className="chat-right" style={{ width: "25%", background: "#f9f9f9", padding: "10px" }}>
            <h3>Member List</h3>
            <DragSizing border="left" handlerStyle={{ backgroundColor: "#ccc", width: "5px", cursor: "ew-resize" }}>
              <ul style={{ height: "200px", overflowY: "scroll" }}>
                {memberList.map((member, index) => (
                  <li key={index}>{member}</li>
                ))}
              </ul>
            </DragSizing>
          </div>
        </div>
      </div>

      <h2>Image Gallery</h2>
      <ImageGallery items={images} />

      <h2>React Player</h2>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        controls={true}
        playing={false}
        width="100%"
        height="400px"
      />

      <h2>Additional Features</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ flex: 1, border: "1px solid #ccc", padding: "10px" }}>
          <h3>Feature 1</h3>
          <p>This is a draggable resizable box.</p>
          <DragSizing
            border="bottom"
            style={{ border: "1px solid #ddd", padding: "10px", minHeight: "100px", maxHeight: "300px" }}
            handlerStyle={{ backgroundColor: "#ccc", height: "5px", cursor: "ns-resize" }}
          >
            <p>Drag to resize me vertically!</p>
          </DragSizing>
        </div>
        <div style={{ flex: 1, border: "1px solid #ccc", padding: "10px" }}>
          <h3>Feature 2</h3>
          <p>This box showcases another draggable handler.</p>
          <DragSizing
            border="right"
            style={{ border: "1px solid #ddd", padding: "10px", minWidth: "150px", maxWidth: "500px" }}
            handlerStyle={{ backgroundColor: "#ccc", width: "5px", cursor: "ew-resize" }}
          >
            <p>Drag to resize me horizontally!</p>
          </DragSizing>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
