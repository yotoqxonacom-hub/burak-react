import axios from "axios";
import { serverApi } from "../../libs/config";
import { Member } from "../../libs/types/member";

class MemberService {
    private readonly path: string;

    constructor() {
        this.path = serverApi;
    }

    async getTopUsers(): Promise<Member[]> {
        try {
            const url = this.path + "/member/top-users";
            const result = await axios.get(url);

            console.log("getTopUsers:", result);

            return result.data;

        } catch (error) {
            console.error("Error, getTopUsers:", error);
            throw error;
        }
    }
}

export default MemberService;
