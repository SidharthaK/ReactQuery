import { useQuery } from "@tanstack/react-query";
import { profileService } from "../API/profile/ProfileService";
import { QueryKeys } from "../helpers/QueryKeys";

export function useMyProfile() {
  return useQuery({
    queryKey: [QueryKeys.ProfilesGet],
    queryFn: () => profileService.getProfiles().then((res) => res.data[0]),
  });
}
