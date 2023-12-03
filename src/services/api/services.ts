import {http} from "~/services/core/http";
import {routes} from "~/services/api/routes";
import {IBrochureTypeBody} from "~/services/api/type";

export const getBrochureTypes = () => http.get(routes.brochureType)

export const createBrochureType = (body: IBrochureTypeBody) => http.post(routes.brochureType, body)