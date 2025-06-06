import { useMemo } from "react";
import { useTasksContext } from "../context/TasksContext";

export function useTasksStats () {
    const {state: tasks} = useTasksContext();

    return useMemo(() => {
        const total = tasks.length;
        const completed = tasks.filter(task => task.isCompleted).length;
        const remaining = total - completed;

        return {total, completed, remaining};
    }, [tasks]); 
}

