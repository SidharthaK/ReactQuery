import { api } from "..";

class ProfileService {
  constructor() {}

  /**
   * @param {number} page
   * @param {number} limit
   * @returns
   */
  getProfiles() {
    return api.get("/myprofile");
  }
  updateProfileData(payload) {
    return api.put("/myprofile/1", payload);
  }
}

export const profileService = new ProfileService();
