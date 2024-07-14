import { Icon } from "semantic-ui-react";

export const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "10px", zIndex: 1, color: "black" }}
            onClick={onClick}
        >
            <Icon name="arrow right" size="large" />
        </div>
    );
};

export const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
            onClick={onClick}
        >
            <Icon name="arrow left" size="large" />
        </div>
    );
};