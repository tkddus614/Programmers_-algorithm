SELECT COUNT(*) AS COUNT FROM ECOLI_DATA
    WHERE CONV(GENOTYPE, 10, 2) NOT LIKE '%1_'
    AND (CONV(GENOTYPE, 10, 2) LIKE '%10_' OR CONV(GENOTYPE, 10, 2) LIKE '%1')
    

