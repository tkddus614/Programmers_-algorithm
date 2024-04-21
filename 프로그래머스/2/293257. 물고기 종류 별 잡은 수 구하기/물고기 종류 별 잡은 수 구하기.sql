SELECT COUNT(*) AS FISH_COUNT, FISH_NAME
    FROM FISH_NAME_INFO A, FISH_INFO B
    WHERE A.FISH_TYPE = B.FISH_TYPE
    GROUP BY FISH_NAME
    ORDER BY FISH_COUNT DESC