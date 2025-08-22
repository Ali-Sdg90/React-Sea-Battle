import React, { useState } from "react";
import { DndContext, closestCenter, DragOverlay } from "@dnd-kit/core";
import {
    SortableContext,
    useSortable,
    arrayMove,
    rectSortingStrategy,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

const generateGrid = () => {
    return Array.from({ length: 100 }, (_, i) => ({
        id: i.toString(),
        defaultSize: i === 5 ? 3 : 1,
        width: 40,
        height: 40,
        span: i === 5 ? 3 : 1,
    }));
};

const SortableItem = ({ id, width, height, span, defaultSize }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    const style = {
        // transform: CSS.Transform.toString(transform),
        transition,
        width: "100%",
        height: height,
        background: "#4f46e5",
        borderRadius: "0.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "12px",
        userSelect: "none",
        cursor: "grab",
        gridColumn: `span ${span}`,
        border: "1px solid #ffffffff",
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {id}
        </div>
    );
};

export default function GridBoard() {
    const [items, setItems] = useState(generateGrid);
    const [activeId, setActiveId] = useState(null);

    const handleDragStart = (event) => {
        setActiveId(event.active.id);
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (over && active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.findIndex((i) => i.id === active.id);
                const newIndex = items.findIndex((i) => i.id === over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
        setActiveId(null);
    };

    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={items.map((i) => i.id)}
                strategy={rectSortingStrategy}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(10, 1fr)",
                        gap: "6px",
                        width: "100%",
                        maxWidth: "500px",
                        margin: "0 auto",
                    }}
                >
                    {items.map((item) => (
                        <SortableItem
                            key={item.id}
                            id={item.id}
                            width={item.width}
                            height={item.height}
                            span={item.span}
                            defaultSize={item.defaultSize}
                        />
                    ))}
                </div>
            </SortableContext>

            <DragOverlay>
                {activeId ? (
                    <div
                        style={{
                            width:
                                items.find((i) => i.id === activeId)
                                    ?.defaultSize *
                                    50 +
                                "px",
                            height: items.find((i) => i.id === activeId)
                                ?.height,
                            background: "#4338ca",
                            borderRadius: "0.5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontSize: "12px",
                        }}
                    >
                        {activeId}
                    </div>
                ) : null}
            </DragOverlay>
        </DndContext>
    );
}
