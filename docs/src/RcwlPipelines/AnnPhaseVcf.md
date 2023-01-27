---
title: AnnPhaseVcf
description: 
Author: 
Last updated: 2022-02-16
type: article
---
## AnnPhaseVcf
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_AnnPhaseVcf.R>
## plot
![## AnnPhaseVcf](/plots/AnnPhaseVcf.svg)
## Inputs
|            |label |type      |description  |
|:-----------|:-----|:---------|:------------|
|svcf        |      |File      |  |
|gvcf        |      |File      |  |
|ref         |      |File      |  |
|VepDir      |      |Directory |  |
|tbam        |      |File      |  |
|rbam        |      |File      |  |
|tsample     |      |string    |  |
|nsample     |      |string    |  |
|rnaseqs     |      |File[]    |  |
|kallistoIdx |      |File      |  |
|threads     |      |int       |  |
## Outputs
|          |label        |type |description  |
|:---------|:------------|:----|:------------|
|annVcf    |  |File |  |
|phasedVCF |  |File |  |
## steps
|              |label        |doc          |
|:-------------|:------------|:------------|
|VCFvep        |  |  |
|dVCFcoverage  |  |  |
|rVCFcoverage  |  |  |
|VCFexpression |  |  |
|PhaseVcf      |  |  |
