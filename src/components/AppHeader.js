import React, {useState} from "react";
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import Todomodal from "./TodoModal";

const AppHeader = () => {

    const [modalOpen, setModalOpen] = useState(true);

    return (
        <div className={styles.appHeader}>
            <Button variant="primary" 
            onClick={() => setModalOpen(true)}>Add Task</Button>
            <SelectButton id="status">
                <option value="all">All</option> 
                <option value="incomplete">Incomplete</option> 
                <option value="complete">Complete</option> 
            </SelectButton>
            <Todomodal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
    );
}

export default AppHeader;
