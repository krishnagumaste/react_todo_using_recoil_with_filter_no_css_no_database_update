import { atom, selector } from "recoil";

export const formState = atom({
    key: "formState",
    default: [
        {title: "Todo 1", description: "Todo 1"},
        {title: "Todo 2", description: "Todo 2"},
    ]
});

export const titleFilterState = atom({
    key: "titleFilterState",
    default: ""
});

export const filteredFormState = selector({
    key: "filteredFormState",
    get: ({get}) => {
        const filter = get(titleFilterState);
        const form = get(formState);

        if(!filter) { 
            return form;
        }

        return form.filter((todo) => 
            todo.title.toLowerCase().includes(filter.toLowerCase())
        );
    }
});