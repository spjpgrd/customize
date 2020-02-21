import * as React from "react";

interface IModalProps {
    onClose: any;
    show: boolean;
    children: any;
}

class Modal extends React.Component<IModalProps> {
    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }

        return (
            <div className="backdrop" style={{
                position: "fixed",
                top: 0,
                // tslint:disable-next-line: object-literal-sort-keys
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "rgba(0,0,0,0.3)",
                backdropFilter: "saturate(120%) blur(8px)",
                padding: 50
            }}>
                <div className="modal" style={{
                    backgroundColor: "#fff",
                    borderRadius: 5,
                    maxWidth: 500,
                    minHeight: 300,
                    // tslint:disable-next-line: object-literal-sort-keys
                    margin: "1.5rem auto 0 auto",
                    paddingTop: 30,
                    paddingRight: 30,
                    paddingBottom: 30,
                    paddingLeft: 30,
                }}>
                    <div className="header" style={{ textAlign: "right" }}>
                        <button onClick={this.props.onClose} className="c-button c-button--close">
                            ×
                    </button>
                    </div>
                    <div className="body" style={{ marginTop: "-20px", marginBottom: "20px" }} >
                        {this.props.children}
                    </div>
                    <div className="footer" style={{ textAlign: "center" }}>
                        <button onClick={this.props.onClose} className="c-button c-button--link">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
