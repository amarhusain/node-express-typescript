import { CreateDistrictDto } from "../dto/district.dto";
import Post from "../interfaces/post.interface";
import District, { IDistrictModel } from "../models/district.model";


export class DistrictRepository {

    private posts: Post[] = [
        {
            author: 'Marcine dist',
            content: 'Dolor sit amet dist',
            title: 'Lorem Ipsum dist',
            connStr: process.env.AZURE_COSMOS_CONNECTIONSTRING || 'NA'
        }
    ];

    constructor(private districtModel: IDistrictModel) { }

    async createDistrict(createDistrictDto: CreateDistrictDto) {
        const district = new this.districtModel(createDistrictDto);
        return await district.save();
    }

    async getAllDistrict() {
        return await this.districtModel.find({});
    }

    async getSampleDistrict() {
        return this.posts;
    }
}


export const districtRepository = new DistrictRepository(District);