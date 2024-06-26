import type { GraphQLQueryFilter } from "../../SearchFilter/types";
import { Order } from "../../types";

export type Payment = {
  id: string;
  amount: number;
  status: string;
  email: string;
  createdAt: string;
  isCreditCard: boolean;
};
export const originData: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    createdAt: "2023-11-14",
    isCreditCard: true,
  },
  {
    id: "a6b2c3d4",
    amount: 200,
    status: "processing",
    email: "john@example.com",
    createdAt: "2023-11-13",
    isCreditCard: false,
  },
  {
    id: "f8e7d6c5",
    amount: 150,
    status: "success",
    email: "sara@example.com",
    createdAt: "2023-11-12",
    isCreditCard: false,
  },
  {
    id: "b5c4d3e2",
    amount: 50,
    status: "failed",
    email: "fail@example.com",
    createdAt: "2023-11-11",
    isCreditCard: true,
  },
  {
    id: "12345678",
    amount: 300,
    status: "pending",
    email: "example1@example.com",
    createdAt: "2023-11-10",
    isCreditCard: true,
  },
  {
    id: "23456789",
    amount: 400,
    status: "processing",
    email: "example2@example.com",
    createdAt: "2023-11-09",
    isCreditCard: true,
  },
  {
    id: "34567890",
    amount: 500,
    status: "success",
    email: "example3@example.com",
    createdAt: "2023-11-08",
    isCreditCard: false,
  },
  {
    id: "718ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    createdAt: "2023-11-14",
    isCreditCard: true,
  },
  {
    id: "a6b1c3d4",
    amount: 200,
    status: "processing",
    email: "john@example.com",
    createdAt: "2023-11-13",
    isCreditCard: false,
  },
  {
    id: "f8e7d6c1",
    amount: 150,
    status: "success",
    email: "sara@example.com",
    createdAt: "2023-11-12",
    isCreditCard: false,
  },
  {
    id: "b5c4d3e1",
    amount: 50,
    status: "failed",
    email: "fail@example.com",
    createdAt: "2023-11-11",
    isCreditCard: true,
  },
  {
    id: "42345678",
    amount: 300,
    status: "pending",
    email: "example1@example.com",
    createdAt: "2023-11-10",
    isCreditCard: true,
  },
  {
    id: "53456789",
    amount: 400,
    status: "processing",
    email: "example2@example.com",
    createdAt: "2023-11-09",
    isCreditCard: true,
  },
  {
    id: "64567890",
    amount: 500,
    status: "success",
    email: "example3@example.com",
    createdAt: "2023-11-08",
    isCreditCard: false,
  },
];

export const setFilterChange = (
  filter: GraphQLQueryFilter,
  data: Payment[],
  setData: React.Dispatch<React.SetStateAction<Payment[]>>,
) => {
  switch (true) {
    case typeof filter?.and !== "undefined":
      if (
        typeof filter?.status?.eq !== "undefined" ||
        typeof filter?.status?.ne !== "undefined"
      ) {
        if (
          typeof filter?.and?.amount === "object" &&
          filter?.and?.amount !== null
        ) {
          switch (true) {
            case "eq" in filter.and.amount: {
              const eqValue = filter.and.amount.eq;
              if (filter?.status?.eq !== "undefined") {
                setData(
                  data.filter(
                    (row) =>
                      row.amount === Number(eqValue) &&
                      row.status === filter.status.eq,
                  ),
                );
              } else {
                setData(
                  data.filter(
                    (row) =>
                      row.amount === Number(eqValue) &&
                      row.status !== filter.status.ne,
                  ),
                );
              }
              break;
            }
            case "gt" in filter.and.amount: {
              const gtValue = filter.and.amount.gt;
              if (filter?.status?.eq !== "undefined") {
                setData(
                  data.filter(
                    (row) =>
                      row.amount > Number(gtValue) &&
                      row.status === filter.status.eq,
                  ),
                );
              } else {
                setData(
                  data.filter(
                    (row) =>
                      row.amount > Number(gtValue) &&
                      row.status !== filter.status.ne,
                  ),
                );
              }
              break;
            }
            case "lt" in filter.and.amount: {
              const ltValue = filter.and.amount.lt;
              if (filter?.status?.eq !== "undefined") {
                setData(
                  data.filter(
                    (row) =>
                      row.amount < Number(ltValue) &&
                      row.status === filter.status.eq,
                  ),
                );
              } else {
                setData(
                  data.filter(
                    (row) =>
                      row.amount < Number(ltValue) &&
                      row.status !== filter.status.ne,
                  ),
                );
              }
              break;
            }
            case "gte" in filter.and.amount: {
              const gteValue = filter.and.amount.gte;
              if (filter?.status?.eq !== "undefined") {
                setData(
                  data.filter(
                    (row) =>
                      row.amount >= Number(gteValue) &&
                      row.status === filter.status.eq,
                  ),
                );
              } else {
                setData(
                  data.filter(
                    (row) =>
                      row.amount >= Number(gteValue) &&
                      row.status !== filter.status.ne,
                  ),
                );
              }
              break;
            }
            case "lte" in filter.and.amount: {
              const lteValue = filter.and.amount.lte;
              if (filter?.status?.eq !== "undefined") {
                setData(
                  data.filter(
                    (row) =>
                      row.amount <= Number(lteValue) &&
                      row.status === filter.status.eq,
                  ),
                );
              } else {
                setData(
                  data.filter(
                    (row) =>
                      row.amount <= Number(lteValue) &&
                      row.status !== filter.status.ne,
                  ),
                );
              }
              break;
            }
          }
          break;
        }
      } else {
        if (
          typeof filter?.and?.status === "object" &&
          filter?.and?.status !== null
        ) {
          switch (true) {
            case "eq" in filter.and.status: {
              const eqValue = filter.and.status.eq;
              switch (true) {
                case typeof filter?.amount?.eq !== "undefined":
                  setData(
                    data.filter(
                      (row) =>
                        row.amount === Number(filter.amount.eq) &&
                        row.status === eqValue,
                    ),
                  );
                  break;
                case typeof filter?.amount?.gt !== "undefined":
                  setData(
                    data.filter(
                      (row) =>
                        row.amount > Number(filter.amount.gt) &&
                        row.status === eqValue,
                    ),
                  );
                  break;
                case typeof filter?.amount?.lt !== "undefined":
                  setData(
                    data.filter(
                      (row) =>
                        row.amount < Number(filter.amount.lt) &&
                        row.status === eqValue,
                    ),
                  );
                  break;
                case typeof filter?.amount?.gte !== "undefined":
                  setData(
                    data.filter(
                      (row) =>
                        row.amount >= Number(filter.amount.gte) &&
                        row.status === eqValue,
                    ),
                  );
                  break;
                case typeof filter?.amount?.lte !== "undefined":
                  setData(
                    data.filter(
                      (row) =>
                        row.amount <= Number(filter.amount.lte) &&
                        row.status === eqValue,
                    ),
                  );
                  break;
              }
              break;
            }
            case "ne" in filter.and.status: {
              const neValue = filter.and.status.ne;
              switch (true) {
                case typeof filter?.amount?.eq !== "undefined":
                  setData(
                    data.filter(
                      (row) =>
                        row.amount === Number(filter.amount.eq) &&
                        row.status !== neValue,
                    ),
                  );
                  break;
                case typeof filter?.amount?.gt !== "undefined":
                  setData(
                    data.filter(
                      (row) =>
                        row.amount > Number(filter.amount.gt) &&
                        row.status !== neValue,
                    ),
                  );
                  break;
                case typeof filter?.amount?.lt !== "undefined":
                  setData(
                    data.filter(
                      (row) =>
                        row.amount < Number(filter.amount.lt) &&
                        row.status !== neValue,
                    ),
                  );
                  break;
                case typeof filter?.amount?.gte !== "undefined":
                  setData(
                    data.filter(
                      (row) =>
                        row.amount >= Number(filter.amount.gte) &&
                        row.status !== neValue,
                    ),
                  );
                  break;
                case typeof filter?.amount?.lte !== "undefined":
                  setData(
                    data.filter(
                      (row) =>
                        row.amount <= Number(filter.amount.lte) &&
                        row.status !== neValue,
                    ),
                  );
                  break;
              }
              break;
            }
          }
        }
      }
      break;
    case typeof filter?.status?.eq !== "undefined":
      setData(data.filter((row) => row.status === filter.status.eq));
      break;
    case typeof filter?.status?.ne !== "undefined":
      setData(data.filter((row) => row.status !== filter.status.ne));
      break;
    case typeof filter?.amount?.eq !== "undefined":
      setData(data.filter((row) => row.amount === Number(filter.amount.eq)));
      break;
    case typeof filter?.amount?.gt !== "undefined":
      setData(data.filter((row) => row.amount > Number(filter.amount.gt)));
      break;
    case typeof filter?.amount?.lt !== "undefined":
      setData(data.filter((row) => row.amount < Number(filter.amount.lt)));
      break;
    case typeof filter?.amount?.gte !== "undefined":
      setData(data.filter((row) => row.amount >= Number(filter.amount.gte)));
      break;
    case typeof filter?.amount?.lte !== "undefined":
      setData(data.filter((row) => row.amount <= Number(filter.amount.lte)));
      break;
    default: {
      setData(data);
    }
  }
};

export const setSortChange = (
  data: Payment[],
  sorting: Order<Payment> | undefined,
): Payment[] => {
  if (!sorting) return data;
  return [...data].sort((a, b) => {
    sorting.field;
    switch (sorting.field) {
      case "amount":
        return sorting.direction === "Asc"
          ? a.amount - b.amount
          : b.amount - a.amount;
      case "status":
        return sorting.direction === "Asc"
          ? a.status.localeCompare(b.status)
          : b.status.localeCompare(a.status);
      case "email":
        return sorting.direction === "Asc"
          ? a.email.localeCompare(b.email)
          : b.email.localeCompare(a.email);
      case "createdAt": {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return sorting.direction === "Asc"
          ? dateA.getTime() - dateB.getTime()
          : dateB.getTime() - dateA.getTime();
      }
      case "isCreditCard":
        return sorting.direction === "Asc"
          ? a.isCreditCard && !b.isCreditCard
            ? 1
            : !a.isCreditCard && b.isCreditCard
              ? -1
              : 0
          : a.isCreditCard && !b.isCreditCard
            ? -1
            : !a.isCreditCard && b.isCreditCard
              ? 1
              : 0;
      default:
        return 0;
    }
  });
};
