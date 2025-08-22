import React, { useState } from "react";
import GridLayout from "react-grid-layout";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./MenuPage.scss";

import { GRID_SIZE } from "../constants/gameSettings";
import { SHIP_TYPES } from "../constants/ships";

const initialItems = Array.from(
    { length: GRID_SIZE * GRID_SIZE },
    (_, index) => ({
        id: index.toString(),
        col: index % GRID_SIZE,
        row: Math.floor(index / GRID_SIZE),
        colSpan: index === 5 ? 3 : 1, // 1
        rowSpan: index === 8 ? 3 : 1, // 1
    })
);

const GridBoard = () => {
    const [layout, setLayout] = useState(
        initialItems.map((item) => ({
            i: item.id,
            x: item.col,
            y: item.row,
            w: item.colSpan,
            h: item.rowSpan,
            static: false,
        })) // Add Ship Generator
    );

    const handleLayoutChange = (newLayout) => {
        setLayout(newLayout);
    };

    return (
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <GridLayout
                className="layout"
                layout={layout}
                cols={10}
                rowHeight={40}
                width={800}
                isResizable={false}
                // compactType={null}
                preventCollision={false}
                onLayoutChange={handleLayoutChange}
                draggableHandle=".drag-handle"
            >
                {layout.map((item) => (
                    <div
                        key={item.i}
                        style={{
                            background: "#4f46e5",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "6px",
                            fontSize: "9px",
                            userSelect: "none",
                        }}
                    >
                        <span
                            className="drag-handle"
                            style={{ width: "100%", cursor: "grab" }}
                        >
                            {`Item ${item.i}`}
                        </span>
                    </div>
                ))}
            </GridLayout>
        </div>
    );
};

export default GridBoard;
