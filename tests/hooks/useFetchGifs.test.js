import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Tests in useFetchGifs hook", () => {
  test("should return the initial state", () => {
    const { result } = renderHook(() => useFetchGifs("DBZ"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });
  test("should return an image array and isLoading in false", async () => {
    const { result } = renderHook(() => useFetchGifs("DBZ"));
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
