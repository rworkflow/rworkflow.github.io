---
title: Mutect2PL
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## Mutect2PL
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_Mutect2PL.R>
## plot
![## Mutect2PL](/plots/Mutect2PL.svg)
## Inputs
|          |label |type   |description  |
|:---------|:-----|:------|:------------|
|tbam      |      |File   |  |
|nbam      |      |File   |  |
|Ref       |      |File   |  |
|normal    |      |string |  |
|tumor     |      |string |  |
|gresource |      |File   |  |
|pon       |      |File   |  |
|interval  |      |File   |  |
|comvcf    |      |File   |  |
|filter    |      |string |  |
|threads   |      |int?   |  |
## Outputs
|          |label        |type |description  |
|:---------|:------------|:----|:------------|
|filterVCF |  |File |  |
|passVCF   |  |File |  |
|conTable  |  |File |  |
|segment   |  |File |  |
## steps
|                          |label        |doc          |
|:-------------------------|:------------|:------------|
|Mutect2                   |  |  |
|GetPileupSummariesT       |  |  |
|GetPileupSummariesN       |  |  |
|CalculateContamination    |  |  |
|LearnReadOrientationModel |  |  |
|FilterMutectCalls         |  |  |
|bcfview                   |  |  |
