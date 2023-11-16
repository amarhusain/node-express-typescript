import { CreateDistrictDto } from "../dto/district.dto";
import { DistrictRepository, districtRepository } from "../repository/district.repository";


export class DistrictService {

    constructor(private districtRepository: DistrictRepository) {

    }

    async createDistrict(createDistrictDto: CreateDistrictDto) {
        return await this.districtRepository.createDistrict(createDistrictDto);
    }

    async getAllDistrict() {

        return await this.districtRepository.getAllDistrict();

    }

    async getSampleDistrict() {
        return await this.districtRepository.getSampleDistrict();
    }

}


export const districtService = new DistrictService(districtRepository);


