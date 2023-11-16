import express, { NextFunction, Request, Response, response } from "express";
import { DistrictService, districtService } from "../services/district.service";
import Post from "../interfaces/post.interface";


class DistrictController {

    public path = '/dist';
    public router = express.Router();



    constructor(private districtService: DistrictService, private mobile: number) {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(this.path, this.getAllDistrict);
        this.router.post(this.path, this.createDistrict);
        this.router.post(this.path + "/a", this.getSampleDistrict);
    }
    async createDistrict(req: Request, response: Response, next: NextFunction) {
        const { _id, name, stateId } = req.body;
        const result = await this.districtService.createDistrict({ _id, name, stateId });
        response.send(result);
    }

    async getAllDistrict(req: Request, response: Response, next: NextFunction) {
        const result = await this.districtService.getAllDistrict();
        response.send(result);
    }

    async getSampleDistrict() {
        const res = await this.districtService.getSampleDistrict();
        response.send(res);
    }

}

// export const districtController = new DistrictController(districtService, 7464646);

export default DistrictController;