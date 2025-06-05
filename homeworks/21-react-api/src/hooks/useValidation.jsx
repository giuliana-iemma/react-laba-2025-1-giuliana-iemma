export function useValidation(title, tasks, currentKey = null ){
    const trimmedTitle = title.trim();

    if (trimmedTitle.length === 0){
        return {valid: false, message: 'Please, write something before pressing the button'}
    }

    if (trimmedTitle.length > 20){
        return {valid: false, message: 'This task is too long. Maximum of 20 characters'}
    }

    const isDuplicate = tasks.some((task) => task.title === trimmedTitle);

    if (isDuplicate) {
        return {valid: false, message: 'This task is already in the list'}
    }

    const isValid = /^[a-zA-Z0-9\s]+$/.test(trimmedTitle);

    if(!isValid) {
        return { valid: false, message: 'Only letters and numbers allowed.' };
    }

    return {valid: true, message: ''}
}