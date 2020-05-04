export const mapJsonResumeToBasicData = (jsonResume) => {
    const city = jsonResume.basics?.location?.city;
    const countryCode = jsonResume.basics?.location?.countryCode;
    return {
        currentCity: ((city || countryCode) && { name: `${city}${countryCode && `, ${countryCode}`}` }) ?? {},
        summary: jsonResume?.basics?.summary,
        label: jsonResume?.basics?.label,
        experienceYears: jsonResume?.specific?.work?.experienceYears,
        studiesLevel: jsonResume?.specific?.education?.studiesLevel,
        codingYears: jsonResume?.specific?.work?.codingYears,
        codingReason: jsonResume?.specific?.work?.codingReason,
        visaSponsorship: jsonResume?.specific?.basics?.visaSponsorship,
        searchState: jsonResume?.specific?.work?.searchState,
        personalDescription: jsonResume?.specific?.basics?.personalDescription
    };
};

export const mapBasicsDataToJsonResume = (data) => ({
    basics: {
        summary: data.summary,
        label: data.label,
        location: data.currentCity && { ...data.currentCity, city: data.currentCity.name }
    },
    specific: {
        basics: {
            visaSponsorship: data.visaSponsorship,
            personalDescription: data.personalDescription
        },
        work: {
            experienceYears: data.experienceYears,
            codingYears: data.codingYears,
            codingReason: data.codingReason,
            searchState: data.searchState
        },
        education: {
            studiesLevel: data.studiesLevel
        }
    }
});
