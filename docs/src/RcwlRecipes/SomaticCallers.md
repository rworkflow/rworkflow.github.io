---
title: SomaticCallers
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## SomaticCallers
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_SomaticCallers.R>
## plot
![## SomaticCallers](/plots/SomaticCallers.svg)
## Inputs
|          |label |type   |description  |
|:---------|:-----|:------|:------------|
|tbam      |      |File   |  |
|nbam      |      |File   |  |
|Ref       |      |File   |  |
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
|SomaticSniperout |  |File |  |
|VarDictout       |  |File |  |
|VarScanSnp       |  |File |  |
|VarScanIndel     |  |File |  |
|VarScansVcf      |  |File |  |
|mergeTSVout      |  |File |  |
|WrapperSNV       |  |File |  |
|WrapperINDEL     |  |File |  |
|WrapperESNV      |  |File |  |
|WrapperEINDEL    |  |File |  |
|neusomaticVCF    |  |File |  |
## steps
|              |label        |doc          |
|:-------------|:------------|:------------|
|Mutect2PL     |  |  |
|MuSE          |  |  |
|bgzip         |  |  |
|tabixIndex    |  |  |
|mantaStrelka  |  |  |
|SomaticSniper |  |  |
|VarDict       |  |  |
|VarScanPL     |  |  |
|Wrapper       |  |  |
|mergeTSV      |  |  |
|neusomaticPL  |  |  |
