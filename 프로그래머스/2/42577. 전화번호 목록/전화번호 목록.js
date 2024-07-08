function solution(phone_book) {
    const phone_sort = phone_book.sort();

    for (let i = 0; i < phone_sort.length - 1; i++) {
        if (phone_sort[i + 1].startsWith(phone_sort[i])) {
            return false;
        }
    }
    return true;
}