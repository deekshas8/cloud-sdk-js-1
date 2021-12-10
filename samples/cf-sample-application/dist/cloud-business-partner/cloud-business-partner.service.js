"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudBusinessPartnerService = void 0;
const common_1 = require("@nestjs/common");
const cloud_sdk_vdm_business_partner_service_1 = require("@sap/cloud-sdk-vdm-business-partner-service");
let CloudBusinessPartnerService = class CloudBusinessPartnerService {
    async getFiveBusinessPartners() {
        return cloud_sdk_vdm_business_partner_service_1.BusinessPartner.requestBuilder()
            .getAll()
            .top(5)
            .execute({ destinationName: 'VLAB' });
    }
};
CloudBusinessPartnerService = __decorate([
    common_1.Injectable()
], CloudBusinessPartnerService);
exports.CloudBusinessPartnerService = CloudBusinessPartnerService;
//# sourceMappingURL=cloud-business-partner.service.js.map