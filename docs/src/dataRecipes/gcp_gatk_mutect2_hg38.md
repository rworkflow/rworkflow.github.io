---
title: gcp gatk mutect2 hg38
description: GATK mutect2 bundle for hg38 from GCP (gs://gatk-best-practices/somatic-hg38)
Author: rworkflow team
Last updated: 2023-01-05
type: data_rcp
---
## gcp_gatk_mutect2_hg38
GATK mutect2 bundle for hg38 from GCP (gs://gatk-best-practices/somatic-hg38)<br>Recipe source code: <https://github.com/rworkflow/ReUseDataRecipe/blob/master/gcp_gatk_mutect2_hg38.R><br>Data source: <https://console.cloud.google.com/storage/browser/gatk-best-practices/somatic-hg38>
## plot
![## gcp_gatk_mutect2_hg38](/plots/gcp_gatk_mutect2_hg38.svg)
## Inputs
|         |label     |type    |description                                             |
|:--------|:---------|:-------|:-------------------------------------------------------|
|filename |file name |string  |The file basename to download from the broad GCP bucket |
|idx      |index     |string? |The 'idx' or 'tbi' index file if existing               |
## Outputs
|      |label |type   |description                     |
|:-----|:-----|:------|:-------------------------------|
|gfile |gfile |File[] |The downloaded annotation files |
## Example:
```
recipeLoad('gcp_gatk_mutect2_hg38', return = TRUE)
gcp_gatk_mutect2_hg38$filename <- 'small_exac_common_3.hg38.vcf.gz'
gcp_gatk_mutect2_hg38$idx <- 'tbi'
getData(gcp_gatk_mutect2_hg38, outdir = 'data/folder', notes = c('gcp', 'broad', 'mutect2', 'small_exac_common'))
```

