---
title: SomaticCaller4
description: 
Author: 
Last updated: 2022-06-24
type: article
---
## SomaticCaller4
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_SomaticCaller4.R>
## plot
![## SomaticCaller4](/plots/SomaticCaller4.svg)
## Inputs
|          |label |type   |description  |
|:---------|:-----|:------|:------------|
|tbam      |      |File   |  |
|nbam      |      |File   |  |
|Ref       |      |File   |  |
|normal    |      |string |  |
|tumor     |      |string |  |
|dbsnp     |      |File   |  |
|gresource |      |File   |  |
|pon       |      |File   |  |
|interval  |      |File   |  |
|comvcf    |      |File   |  |
|filter    |      |string |  |
|threads   |      |int    |  |
## Outputs
|                 |label        |type |description  |
|:----------------|:------------|:----|:------------|
|mutect2filterVCF |  |File |  |
|mutect2passVCF   |  |File |  |
|mutect2conTable  |  |File |  |
|mutect2segment   |  |File |  |
|MuSEout          |  |File |  |
|strelka2snv      |  |File |  |
|strelka2indel    |  |File |  |
|VarDictout       |  |File |  |
|combineVcf       |  |File |  |
## steps
|             |label        |doc          |
|:------------|:------------|:------------|
|Mutect2PL    |  |  |
|MuSE         |  |  |
|bgzip        |  |  |
|tabixIndex   |  |  |
|mantaStrelka |  |  |
|VarDict      |  |  |
|combine      |  |  |
