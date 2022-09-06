import { useState } from "react";

const SwitchView = () => {
    const [isListView, setListView] = useState(false);
    const getListView = (isList) => {
        setListView(isList);
    }

    return [isListView, getListView];
}

export default SwitchView;