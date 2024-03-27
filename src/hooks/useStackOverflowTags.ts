import { useState, useEffect } from "react";

type StackOverflowTag = {
  count: number;
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  name: string;
};

interface StackOverflowTagsResponse extends Response {
  items: StackOverflowTag[];
  quota_max: number;
  quota_remaining: number;
  has_more: boolean;
}


/**
 * Custom hook to fetch Stack Overflow tags.
 *
 * @param pageSize The number of tags to fetch per page (default: 100).
 * @returns An object containing the fetched tags, success status, and loading status.
 */
function useStackOverflowTags(pageSize = 100) {
  const [tags, setTags] = useState<StackOverflowTag[]>([]);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = (await fetch(
          `https://api.stackexchange.com/2.3/tags?order=desc&pagesize=${pageSize}&sort=popular&site=stackoverflow`
        )) as StackOverflowTagsResponse;

        if (response.status !== 200) {
          throw new Error("Failed to fetch tags");
        }

        const data = await response.json();
        setTags(data.items);
        setSuccess(true);
      } catch (e) {
        setSuccess(false);
      } finally {
        setLoading(false);
      }
    })();
  }, [pageSize]);

  return { tags, success, loading };
}

export { useStackOverflowTags, type StackOverflowTag };
