
import {Modal } from "antd";

import PropTypes from "prop-types";
const ModelCharity = ({ open, onClose, children , title }) => {
    return (
        <Modal title={title} open={open} onCancel={onClose} footer={null}>
            {children}
        
        </Modal>
    );



};

ModelCharity.propTypes = {
    title: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
};
export default ModelCharity