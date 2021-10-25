import { Gender } from "../domain/types/gender-type";
import { TeamType } from "../domain/types/team-type";

export class Utils {
    static getTeam(team) {
        switch (team) {
            case TeamType.MOBILE:
                return "Mobile";
            case TeamType.FRONTEND:
                return "Frontend";
            case TeamType.BACKEND:
                return "Backend";
            default:
                return "Not defined";
        }
    }

    static formatDate(iso) {
        let date = new Date(iso);
        return `${date.getFullYear()}-${this.padLeft(date.getMonth() + 1)}-${this.padLeft(date.getDate())}`;
    }

    static padLeft(value) {
        return value.toString().padStart(2, '0');
    }

    static getGenderOptions(gender) {
        switch (gender) {
            case Gender.FEMALE:
                return "Female";
            case Gender.MALE:
                return "Male";
            case Gender.NON_BINARY:
                return "Non-binary";
            default:
                return "Prefer not to say";
        }
    }
}