extend type Mutation {
  createPartnerOrganization(
    input: CreatePartnerOrganizationInput!
  ): PartnerOrganization

}

Mutation: {
  createPartnerOrganization: async (
    _: Record<never, never>,
    { input }: MutationCreatePartnerOrganizationArgs,
    { user }: GQLContext,
  ) => {
    const existingPartnerOrganization = await PartnerOrganization.findOne({
      primaryURL: input.primaryURL,
    });
    if (existingPartnerOrganization) {
      throw new Error(`${input.primaryURL} already found in database`);
    }
    const partnerOrganization = new PartnerOrganization({
      ...input,
    });
    if (!partnerOrganization) {
      throw new Error(`${input.primaryURL} creation failed`);
    }
    await partnerOrganization.save();
    return partnerOrganization;
  },
 
