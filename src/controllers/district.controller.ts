import express, { NextFunction, Request, Response } from "express";
import { DistrictService, districtService } from "../services/district.service";


class DistrictController {

    public path = '/dist';
    public router = express.Router();

    constructor(private districtService: DistrictService, private mobile: number) {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(this.path, this.getAllDistrict);
        this.router.post(this.path, this.createDistrict);
    }
    async createDistrict(req: Request, response: Response, next: NextFunction) {
        const { _id, name, stateId } = req.body;
        const result = await districtService.createDistrict({ _id, name, stateId });
        response.send(result);
    }

    async getAllDistrict(req: Request, response: Response, next: NextFunction) {
        const result = await districtService.getAllDistrict();
        response.send(result);
    }

}

// export const districtController = new DistrictController(districtService, 7464646);

export default DistrictController;