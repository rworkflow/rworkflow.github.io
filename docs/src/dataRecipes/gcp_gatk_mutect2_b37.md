---
title: gcp gatk mutect2 b37
description: GATK mutect2 bundle for b37 from GCP (gs://gatk-best-practices/somatic-b37)
Author: rworkflow team
Last updated: 2022-12-21
type: article
---
## gcp_gatk_mutect2_b37
GATK mutect2 bundle for b37 from GCP (gs://gatk-best-practices/somatic-b37)<br>Data source: <https://console.cloud.google.com/storage/browser/gatk-best-practices/somatic-b37>
## plot
![## gcp_gatk_mutect2_b37](/plots/gcp_gatk_mutect2_b37.svg)
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
recipeLoad('gcp_gatk_mutect2_b37', return = TRUE)
gcp_gatk_mutect2_b37$filename <- 'small_exac_common_3.vcf'
gcp_gatk_mutect2_b37$idx <- 'idx'
getData(gcp_gatk_mutect2_b37, outdir = 'data/folder', notes = c('gcp', 'broad', 'mutect2', 'small_exac_common')
```

