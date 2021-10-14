import "../css/card.css";

const Card = (props) => {
    const classes = "class " + props.className;
    return <div className={classes}>{props.children}</div>;
};

export default Card;
