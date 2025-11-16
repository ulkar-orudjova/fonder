import workDb from "../../../db/workDb";

export class WorkService {
    static getCategories(){
        const data = workDb.map((item) =>item.category);
        return Array.from(new Set(data));
    }
}