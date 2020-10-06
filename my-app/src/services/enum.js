const views = {
    TOP : "120",
    BOTTOM: "0",
};

let view = views.TOP;

if(!view) {
    throw new Error ("View is not defined!");
}