import { useEffect } from "react";
import { Link } from "react-router-dom";
import NewsImage from "../../assets/images/stage-4.png";
import { BsArrowRight } from "react-icons/bs";

function NewsDetail() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])

  return (
    <div className="container mx-auto px-4 sm:px-16 lg:px-32">
      <h3 className="text-black text-3xl text-center font-bold leading-[60px]">The Collaboration for the Establishment of an African Population Cohorts Consortium (CE-APCC)</h3>
      <div className="my-16 w-full ld:w-[60%] mx-auto">
        <img src={NewsImage} alt="News Image" className="w-full h-auto rounded-xl" />
      </div>
      <div className="">
        <p className="text-[#333333] text-xl font-normal leading-[30px]">A group of funders led by Wellcome have commissioned, through an open competitive process, an African-led team to design an ambitious initiative.
          The team will plan a network of large longitudinal population studies – studies which track the health of a large group of people over time – across Africa that builds on existing infrastructure and capacity and creates resources where gaps are evident.
          This initiative, provisionally named the African Population Cohort Consortium (APCC), will inform Africa’s specific health needs and will enable the next phase of scientific discovery utilising African diversity for global health benefit. A team co-led by Kobus Herbst and JP Ochieng’-Odero is embarking on an 18-month adventure that will galvanise expertise across the continent. They will design what the APCC will look like and what it will deliver, supported by the power of the largest population data initiative in Africa to date.</p>
        <p className="text-[#333333] text-xl font-normal leading-[30px]">Robust and timely data on biology, genetic variation, health, behaviour, socioeconomics, and the environment are needed to predict and combat such disasters in future; and equally to deal with currently prevalent health burdens in Africa, such as a rising prevalence of non-communicable diseases and mental health, and existing problems such as HIV/AIDS, tuberculosis, malaria, and malnutrition, all exacerbated by inequity and poverty.
          Such data have the potential to spark a scientific revolution in Africa, leading to new and meaningful understanding – with global significance – and guiding interventions specific to the continent to enhance population and individual health and wellbeing.
          Evidence gathered from high-income countries does not necessarily reflect the specific disease burden or multi-morbidity experienced in Africa, nor does it contend with the same resource constraints and socio-political realities. Nevertheless, African science can offer valuable insights to the world at large, evidenced most recently by the contribution from African scientists to characterising SARS-CoV-2 variants3. Indeed, it is widely recognized that genetic data from Africa is lacking globally4, and African genetic, cultural, and environmental diversity has great potential to provide insights into ill health and effective interventions to improve health.
          The value of longitudinal population cohorts to enable the study of diverse populations and key demographic subgroups, rare genetic variants and exposures, and gene-environment interactions is recognised by the International HundredK+ Cohorts Consortium5. Health and demographic surveillance systems, a specific type of population-based cohort, have a long history of providing important scientific insights into the burden of disease and responsive interventions in different regions and communities in Africa6.
          The realisation that a consortium of population cohorts in Africa can contribute massively to harnessing the genetic, socio-economic, cultural, and environmental diversity of Africa for scientific discovery underlies the efforts of the Collaboration for the Establishment of an African Population Cohort Consortium (CE-APCC). We aim to unlock the potential of a network of population cohorts in Africa through interoperability across cohorts, data harmonisation, safe harbour agreements to allow data transfer between countries and cohorts7, whilst at the same time using the investment in and expertise already present in these cohorts to build research capacity in the continent.
          The CE-APCC is a collaboration of African scientists that aims to create a transformational capability and forum on population-based cohorts involving a broad spectrum of African scientists, policymakers, community contributors, and other stakeholders to co-create an evidence-based blueprint for the APCC and to build enthusiasm and support for its implementation and long-term support.
          The CE-APCC is currently undertaking a rigorous formative phase leading up to the establishment of the APCC in 2024. The formative phase comprises four stages:<br />
          1. A review of population-based cohort science in Africa, including a survey of existing cohorts, an assessment of the synergies between the APCC and other ongoing efforts to support African research, and identification of stakeholders.<br />
          2. A series of virtual thematic workshops during the second and third quarters of 2023 to discuss and debate issues identified during the previous stage will be conducted with scientists active in African cohorts and other key stakeholders.<br />
          3. During the third stage of the formative phase, work will proceed in seven workstreams (Stakeholder and Community Engagement, Existing Cohort Engagement, Research Vision & Objectives, Data & Methodology, ‘Omics, Governance & Ethics, and Capacity Strengthening) to detail the optimal components of the APCC.<br />
          4. The final stage will culminate in an in-person meeting towards the end of the first quarter of 2024 to reach a consensus and finalise the APCC blueprint document for submission to the funders and wider scientific, policy and development communities.<br />
          The conclusion of the formative phase will herald a new and exciting phase for population cohort-based science in Africa, evidenced by greater collaboration and support for the impactful science facilitated by the APCC.
          Work takes place under the auspices of the Africa Population Health Research Centre (APHRC) with support cores at the African Institute for Development (AFIDEP), Africa Research and Impact Network (ARIN), Malawi Epidemiology and Intervention Research Unit (MEIRU), and The Africa Health Research Institute (AHRI). The formative phase of the CE-APCC is funded by the Wellcome, Trust, Medical Research Council (MRC-UKRI) and Bill & Melinda Gates Foundation.
          More information can be obtained from the co-leads of the CE-APCC, Dr Kobus Herbst (kobus.herbst@mrc.ac.za) and Dr Evelyn Gitau (egitau@aphrc.org) or the CE-APCC project manager, Samantha Khan-Gillmore (Samantha.Khan-Gillmore@ahri.org).</p>
        <Link to="/news" className="relative flex flex-row items-center w-fit z-10 text-[#1BAE70] hover:text-[#333333] text-xl sm:text-2xl xl:text-3xl font-normal leading-[40px] my-16">
          Back to News and articles <BsArrowRight className="ml-4" />
        </Link>
      </div>

    </div>
  )
}

export default NewsDetail;